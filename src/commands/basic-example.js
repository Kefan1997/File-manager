import { program } from 'commander'; // Help us to create CLI in Node.js
import chalk from 'chalk'; // color

export const runBasicExample = (options) => {
  program
    .version('1.0.0')
    .description('My Node CLI')
    .option('-n, --name <type>', 'Add your name')
    .action((options) => {
      console.log(chalk.blue(`Hey, ${options.name}!`));
    });

  program.parse(process.argv);
};
