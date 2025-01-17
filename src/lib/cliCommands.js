import chalk from 'chalk';

import copy from './fs/copy.js';
import remove from './fs/delete.js';
import renameFn from './fs/rename.js';
import calcHash from './hash/calcHash.js';
import createFile from './fs/createFile.js';
import changeDirectory from './navigation/cd.js';
import up from './navigation/up.js';
import listFilesAndFolders from './navigation/ls.js';
import readFile from './fs/read.js';
import getEOLCharacter from './os/eol.js';

export default async function executedCommands(command, args) {
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
    case 'cp':
      await copy(args[0], args[1]);
      break;
    case 'delete':
      await remove(args[0], args[1]);
      break;
    case 'rn':
      await renameFn(args[0], args[1]);
      break;
    case 'os':
      getEOLCharacter(args[0]);
      break;
    case 'hash':
      await calcHash(args[0]);
      break;
    default:
      console.log(chalk.red('Invalid input'));
  }
}
