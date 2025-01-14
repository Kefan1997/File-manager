import { cp } from 'node:fs/promises';

import { getPath, doesPathExist, operationFail } from '../helpers/index.js';

const copy = async () => {
  const pathToCopyDir = getPath(import.meta.url, 'files');
  const pathToDestinationDir = getPath(import.meta.url, 'files_copy');

  if (!(await doesPathExist(pathToCopyDir)) || (await doesPathExist(pathToDestinationDir))) {
    operationFail();
    return;
  }

  try {
    await cp(pathToCopyDir, pathToDestinationDir, { recursive: true });
    console.log('Files copied successfully');
  } catch (err) {
    throw err;
  }
};

await copy();
