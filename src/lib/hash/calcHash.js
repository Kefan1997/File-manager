import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

export default async function calcHash(pathToFile) {
  try {
    const resolvedPath = path.resolve(pathToFile);

    const hash = createHash('sha256').setEncoding('hex');
    const readStream = createReadStream(resolvedPath);

    await pipeline(readStream, hash);

    hash.end();

    process.stdout.write(`Hash: ${hash.read()}\n`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else if (err.code === 'EACCES') {
      console.error('You do not have permission to read this file');
      return;
    } else {
      console.error('An error occurred:', err.message);
    }
  }
}
