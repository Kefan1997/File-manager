import { cp } from 'node:fs/promises';

import { getPath, doesPathExist } from '../../helpers/index.js';

const copy = async (pathToFile, pathToNewDirectory) => {
  const pathToCopyDir = getPath(import.meta.url, pathToFile);
  const pathToDestinationDir = getPath(import.meta.url, pathToNewDirectory);

  if (!(await doesPathExist(pathToCopyDir)) || (await doesPathExist(pathToDestinationDir))) {
    throw new Error('FS operation failed');
    return;
  }

  try {
    await cp(pathToCopyDir, pathToDestinationDir, { recursive: true });
    console.log('Files copied successfully');
  } catch (err) {
    throw err;
  }
};

export default copy;
