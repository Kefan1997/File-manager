import { program } from 'commander'; // Help us to create CLI in Node.js
import chalk from 'chalk'; // color

export const runChalkExample = () => {
  program
    .version('1.0.0')
    .description('My Node CLI')
    .option('-n, --name <type>', 'Add your name')
    .action(() => {
      console.log(chalk.blue(`Hey!`));
      console.log(chalk.green(`Hey!`));
      console.log(chalk.red(`Hey!`));
    });

  program.parse(process.argv);
};
