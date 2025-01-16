import fs from 'node:fs/promises';
import path from 'node:path';

export default async function listFilesAndFolders() {
  try {
    const files = await fs.readdir('.');
    const filesAndFolders = [];

    for (const file of files) {
      const fullPath = path.join('.', file);
      const stats = await fs.stat(fullPath);

      if (stats.isDirectory()) {
        filesAndFolders.push({ name: file, type: 'directory' });
      } else if (stats.isFile()) {
        filesAndFolders.push({ name: file, type: 'file' });
      }
    }

    filesAndFolders.sort((a, b) => {
      if (a.type === b.type) {
        return a.name.localeCompare(b.name);
      }
      return a.type === 'directory' ? -1 : 1;
    });

    console.table(filesAndFolders);
  } catch (err) {
    console.error('Error:', err);
  }
}

// listFilesAndFolders();
