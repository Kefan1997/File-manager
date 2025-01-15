export default function up() {
  try {
    process.chdir('../');
    const currentDir = process.cwd();
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}
