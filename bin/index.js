#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import Conf from 'conf';
import chalk from 'chalk';
import readline from 'readline';

import { printCurrentDir } from '../src/lib/currentDir.js';

const config = new Conf({ projectName: 'File-manager' });

const argv = yargs(hideBin(process.argv))
  .option('username', {
    alias: 'u',
    type: 'string',
    description: 'User name',
    demandOption: true,
  })
  .help()
  .alias('help', 'h').argv;

const username = argv.username || 'guest';
console.log(chalk.green(`Welcome to the File Manager, ${username}`));

printCurrentDir();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: chalk.yellow('> '),
});

rl.prompt();

rl.on('line', async (line) => {
  const [command, ...args] = line.trim().split(' ');

  if (command === '.exit') {
    console.log(chalk.green(`Thank you for using File Manager, ${username}, goodbye!`));
    rl.close();
    return;
  }

  printCurrentDir();
  rl.prompt();
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
