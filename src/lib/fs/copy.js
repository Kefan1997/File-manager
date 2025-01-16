import path from 'node:path';
import fs from 'node:fs';
import chalk from 'chalk';

export default async function copy(pathToFile, pathToNewDirectory) {
  try {
    const resolvedPathToFile = path.resolve(pathToFile);
    const resolvedPathToNewDir = path.resolve(pathToNewDirectory);

    if (!fs.existsSync(resolvedPathToFile)) {
      throw new Error('The source file does not exist.');
    }

    if (!fs.existsSync(resolvedPathToNewDir)) {
      fs.mkdirSync(resolvedPathToNewDir, { recursive: true });
    }

    const fileName = path.basename(resolvedPathToFile);
    const newFilePath = path.join(resolvedPathToNewDir, fileName);

    const readable = fs.createReadStream(resolvedPathToFile);
    const writable = fs.createWriteStream(newFilePath);

    readable.pipe(writable);

    writable.on('finish', () => {
      console.log(chalk.green(`File successfully copied to: ${newFilePath}`));
    });

    readable.on('error', (err) => {
      console.error(chalk.red('Error reading file:'), err.message);
    });

    writable.on('error', (err) => {
      console.error(chalk.red('Error writing file:'), err.message);
    });
  } catch (err) {
    throw err;
  }
}
