import { join } from 'node:path';

export const getPath = (currentPath, folderName, fileName = '') =>
  join(currentPath, folderName, fileName);
