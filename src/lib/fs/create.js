import { writeFile } from 'node:fs/promises';

import { getPath } from '../../helpers/index.js';

export default async function createFile(fileName) {
  try {
    const path = getPath(process.cwd(), fileName);

    await writeFile(path, '', {flag: 'wx'});
  } catch (err) {
    if (err.code === 'EEXIST' || err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    throw err;
  }
}
