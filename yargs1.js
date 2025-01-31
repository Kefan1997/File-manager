#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command(
    'greet [name]',
    'Hi user',
    (yargs) => {
      yargs.positional('name', {
        describe: 'Name of the user',
        type: 'string',
        default: 'gust',
      });
    },
    (argv) => {
      console.log(`Hi, ${argv.name}`);
    }
  )
  .command(
    'sum <a> <b>',
    'Count sum of two numbers',
    (yargs) => {
      yargs
        .positional('a', {
          describe: 'first number',
          type: 'number',
        })
        .positional('b', {
          describe: 'Second number',
          type: 'number',
        });
    },
    (argv) => {
      console.log(`Sum: ${argv.a + argv.b}`);
    }
  )
  .help().argv;
