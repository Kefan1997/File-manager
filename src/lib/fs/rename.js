import { rename } from 'node:fs/promises';

import { getPath, doesPathExist } from '../../helpers/index.js';

const renameFn = async (pathToFile, newFileName) => {
  const oldPath = getPath(import.meta.url,  'wrongFilename.txt');
  const newPath = getPath(import.meta.url, 'properFilename.md');

  if (!(await doesPathExist(oldPath)) || (await doesPathExist(newPath))) {
    throw new Error('FS operation failed');
  }

  try {
    await rename(oldPath, newPath);
  } catch (err) {
    throw err;
  }
};

export default renameFn;
