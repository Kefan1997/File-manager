import { writeFile } from 'node:fs/promises';

export default async function createFile(fileName) {
  try {
    const path = join(process.cwd(), fileName);

    await writeFile(path, '', { flag: 'wx' });
  } catch (err) {
    if (err.code === 'EEXIST' || err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    throw err;
  }
}
