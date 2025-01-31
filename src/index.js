#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';
import readline from 'readline';

import config from '../src/lib/config.js';
import { printCurrentDir } from '../src/lib/currentDir.js';
import executedCommands from '../src/lib/cliCommands.js';

const argv = yargs(hideBin(process.argv))
  .option('username', {
    alias: 'u',
    type: 'string',
    description: 'User name',
    demandOption: true,
  })
  .help()
  .alias('help', 'h').argv;

if (argv.username) {
  config.set('username', argv.username);
}

const username = config.get('username');
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
    rl.close();
    return;
  }

  try {
    await executedCommands(command, args)
  } catch (err) {
    console.error(chalk.red(`Error: ${err.message}`))
  }

  printCurrentDir();
  rl.prompt();
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
