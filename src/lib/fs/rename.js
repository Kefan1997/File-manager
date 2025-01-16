import { rename } from 'node:fs/promises';
import path from 'node:path';

export default async function renameFn(pathToFile, newFileName) {
  try {
    const resolvedPath = path.resolve(pathToFile);

    await rename(resolvedPath, newFileName);
  } catch (err) {
    throw err;
  }
}
