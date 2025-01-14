#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('name', {
    alias: 'n',
    type: 'string',
    description: 'Your name',
  })
  .option('age', {
    alias: 'a',
    type: 'number',
    description: 'Your age',
  })
  .help()
  .alias('help', 'h').argv;

console.log(`Hi, ${argv.name || 'gust'}`);
if (argv.age) {
  console.log(`Your age is ${argv.age}`);
}
