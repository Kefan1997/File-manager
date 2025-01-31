import fs from 'node:fs/promises';
import path from 'node:path';
import chalk from 'chalk';

export default async function listFilesAndFolders() {
  const files = await fs.readdir('.');
  const filesAndFolders = [];

  for (const file of files) {
    const fullPath = path.join('.', file);
    const stats = await fs.stat(fullPath);

    filesAndFolders.push({ name: file, type: stats.isDirectory() ? 'directory' : 'file' });
  }

  filesAndFolders.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    return a.type === 'directory' ? -1 : 1;
  });

  console.table(filesAndFolders);
}
