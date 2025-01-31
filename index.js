#!/usr/bin/env node

import { program } from 'commander'; // Help us to create CLI in Node.js
import chalk from 'chalk'; // color
import inquirer from 'inquirer'; // A collection of common interactive command line user interfaces
import ora from 'ora'; // spinner
import figlet from 'figlet';

// program
//   .version('1.0.0')
//   .description('My Node CLI')
//   .option('-n, --name <type>', 'Add your name')
//   .action((options) => {
//     console.log(chalk.blue(`Hey, ${options.name}!`));
//   });

console.log(
  chalk.yellow(figlet.textSync('My CLI', { horizontalLayout: "full" }))
)

program.version('1.0.0').description('My Node CLI');

// program.action(() => {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//       },
//       {
//         type: 'confirm',
//         name: 'confirm',
//         message: 'Do you want to proceed?'
//       },
//       {
//         type: 'list',
//         name: 'list',
//         message: 'Select an option',
//         choices: ['first', 'second', 'third']
//       },
//       {
//         type: 'checkbox',
//         name: 'checkbox',
//         message: 'Select multiple options',
//         choices: ['first', 'second', 'third']
//       },
//       {
//         type: 'password',
//         name: 'password',
//         message: 'Enter a password'
//       },
//       {
//         type: 'rawlist',
//         name: 'rawlist',
//         message: 'Select an option',
//         choices: ['first', 'second', 'third']
//       }
//     ])
//     .then((answers) => {
//       console.log(chalk.green(`Hello there, ${answers.name}!`));

//       if(answers.confirm) {
//         console.log(chalk.green('Proceeding...'));
//       } else {
//         console.log(chalk.red('Aborted!'));
//         return;
//       }
//     })
// });

program.action(() => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Choose an option',
        choices: ['first', 'second', 'third'],
      },
    ])
    .then((result) => {
      const spinner = ora(`Doing ${result.choice}...`).start();

      setTimeout(() => {
        spinner.succeed(chalk.green('Done!'));
      }, 3000);
    });
});

program.parse(process.argv);
