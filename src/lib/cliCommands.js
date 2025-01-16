import chalk from 'chalk';

import copy from './fs/copy.js';
import remove from './fs/delete.js';
import renameFn from './fs/rename.js';
import compress from './zip/compress.js';
import decompress from './zip/decompress.js';
import calcHash from './hash/calcHash.js';
import createFile from './fs/create.js';
import changeDirectory from './navigation/cd.js';
import up from './navigation/up.js';
import listFilesAndFolders from './navigation/ls.js';
import readFile from './fs/read.js';

export default async function executedCommands(command, args) {
  // console.log('command', command);
  // console.log('args', args);
  switch (command) {
    case 'up':
      up();
      break;
    case 'cd':
      changeDirectory(args[0]);
      break;
    case 'ls':
      await listFilesAndFolders();
      break;
    case 'cat':
      readFile(args[0]);
      break;
    case 'add':
      await createFile(args[0]);
      break;
    case 'copy':
      await copy(args[0], args[1]);
      console.log(chalk.green('File copied successfully.'));
      break;
    // need to implement this
    case 'move':
      await move(args[0], args[1]);
      console.log(chalk.green('File moved successfully.'));
      break;
    case 'delete':
      await remove(args[0], args[1]);
      console.log(chalk.green('File deleted successfully.'));
      break;
    case 'rename':
      await renameFn(args[0], args[1]);
      console.log(chalk.green('File renamed successfully.'));
      break;
    case 'compress':
      await compress(args[0], args[2]);
      console.log(chalk.green('File has been compressed successfully.'));
      break;
    case 'decompress':
      await decompress(args[0], args[1]);
      console.log(chalk.green('File has been decompressed successfully.'));
      break;
    case 'hash':
      await calcHash(args[0], args[1]);
      console.log(chalk.green('Hash has been calculated successfully.'));
      break;
    // need to implement this
    case 'system':
      await operatingSystem(args[0], args[1]);
      console.log(chalk.green('Operation system has been displayed'));
      break;
    // need to implement this
    case 'streams':
      await streams(args[0], args[1]);
      console.log(chalk.green('Streams successfully.'));
      break;
    default:
      console.log(chalk.red('Invalid input'));
  }
}
