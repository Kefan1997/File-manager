import { writeFile } from 'node:fs/promises';

import { getPath } from '../../helpers/index.js';

const create = async (fileName) => {
  try {
    const path = getPath(process.cwd(), fileName);

    await writeFile(path, '');
  } catch (err) {
    if (err.code === 'EEXIST' || err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    throw err;
  }
};

export default create;
