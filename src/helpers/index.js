import { access } from 'node:fs/promises';
import { join } from 'node:path';

export const getPath = (currentPath, folderName, fileName = '') =>
  join(currentPath, folderName, fileName);

export const doesPathExist = async (path) => {
  try {
    await access(path);

    return true;
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    }
    throw err;
  }
};
