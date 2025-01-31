import { rename } from 'node:fs/promises';
import path from 'node:path';

export default async function renameFn(pathToFile, newFileName) {
    const resolvedPath = path.resolve(pathToFile);

    await rename(resolvedPath, newFileName);
}
