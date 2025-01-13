const yargs = require("yargs");

const argv = yargs.command('greet [name]', 'Greet a person', {
  name: {
    description: 'The name of the person to greet',
    alias: 'n',
    type: 'string'
  }
})
.help()
.alias('help', 'h')
.argv;

if(argv.name) {
  console.log(`Hello, ${argv.name}!`);
} else {
  console.log('Hello, world!');
}