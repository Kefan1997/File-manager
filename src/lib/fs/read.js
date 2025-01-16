import chalk from 'chalk';
import { createReadStream } from 'node:fs';
import path from 'node:path';

export default function readFile(fileName) {
  try {
    const resolvedPath = path.resolve(fileName);
    const readStream = createReadStream(resolvedPath, { encoding: 'utf-8' });

    readStream.on('data', (chunk) => {
      console.log(chalk.yellowBright('Part of the data:\n'), chunk);
    });

    readStream.on('end', () => {
      console.log(chalk.green('File reading completed.'));
    });

    readStream.on('error', () => {
      console.error('Error reading file (in stream):', err.message);
    });
  } catch (err) {
    console.error(`Error creating stream: ${err.message}`);
  }
}
