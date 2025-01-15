import fs from 'node:fs';
import path from 'node:path';

export default function changeDirectory(directoryPath) {
  try {
    const resolvedPath = path.resolve(directoryPath);

    if (!fs.existsSync(resolvedPath)) {
      console.error(`Error: Directory "${resolvedPath}" does not exist`);
      return;
    }

    if (!fs.statSync(resolvedPath)) {
      console.error(`Error: "${resolvedPath}" is not a directory`);
      return;
    }

    process.chdir(resolvedPath);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
