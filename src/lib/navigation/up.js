export default function up() {
  try {
    process.chdir('../');
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}
