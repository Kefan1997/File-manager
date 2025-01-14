import {cwd} from 'process';
import chalk from 'chalk';

export function printCurrentDir() {
  console.log(chalk.blue(`You are currently in ${cwd()}`))
}