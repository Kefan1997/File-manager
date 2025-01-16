import chalk from 'chalk';
import { createReadStream, statSync } from 'node:fs';
import path from 'node:path';

export default function readFile(fileName) {
  try {
    const resolvedPath = path.resolve(fileName);
    const stats = statSync(resolvedPath);

    if (stats.isDirectory()) {
      console.error(chalk.red('Error: Can not read a directory'));
      return;
    }

    const readStream = createReadStream(resolvedPath, { encoding: 'utf-8' });

    readStream.on('data', (chunk) => {
      console.log(chalk.yellowBright('Part of the data:\n'), chunk);
    });

    readStream.on('end', () => {
      console.log(chalk.green('File reading completed.'));
    });

    readStream.on('error', () => {
      console.error(chalk.red('Error reading file (in stream):'), err.message);
    });
  } catch (err) {
    console.error(chalk.red('Error creating stream:'), err.message);
  }
}
