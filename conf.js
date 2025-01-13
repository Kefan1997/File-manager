#!/usr/bin/env node

import Conf from 'conf';
import yargs from 'yargs';
import chalk from 'chalk';

const config = new Conf({
  projectName: 'cli-app',
});

const argv = yargs(process.argv.slice(2))
  .command(
    'set <key> <value>',
    'Сохранить значение в конфигурацию',
    (yargs) => {
      yargs
        .positional('key', {
          describe: 'Ключ для сохранения',
          type: 'string',
        })
        .positional('value', {
          describe: 'Значение для сохранения',
          type: 'string',
        });
    },
    (argv) => {
      config.set(argv.key, argv.value);
      console.log(chalk.green(`Сохранено: ${argv.key} = ${argv.value}`));
    }
  )
  .command(
    'get <key>',
    'Получить значение из конфигурации',
    (yargs) => {
      yargs.positional('key', {
        describe: 'Ключ для извлечения',
        type: 'string',
      });
    },
    (argv) => {
      const value = config.get(argv.key);
      if (value) {
        console.log(chalk.blue(`Значение ключа "${argv.key}": ${value}`));
      } else {
        console.log(chalk.red(`Ключ "${argv.key}" не найден.`));
      }
    }
  )
  .command(
    'delete <key>',
    'Удалить значение из конфигурации',
    (yargs) => {
      yargs.positional('key', {
        describe: 'Ключ для удаления',
        type: 'string',
      });
    },
    (argv) => {
      config.delete(argv.key);
      console.log(chalk.yellow(`Ключ "${argv.key}" удалён.`));
    }
  )
  .command('clear', 'Очистить всю конфигурацию', {}, () => {
    config.clear();
    console.log(chalk.red('Вся конфигурация очищена.'));
  })
  .help().argv;
