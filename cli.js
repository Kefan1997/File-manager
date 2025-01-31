#!/usr/bin/env node

console.log('Hello, world!');

const args = process.argv.slice(2);

console.log(args)

if(args.includes('--help') || args.includes('-h')) {
  console.log(`
    Usage: mycli [options]
    Options:
      --help, -h Show this help message
      --name Provide your name
    `);
} else if(args.includes('--name')) {
  const nameIndex = args.indexOf('--name') + 1;
  const name = args[nameIndex];
  console.log(`Hello, ${name || 'stranger'}!`);
} else {
  console.log('Run "mycli --help" to see available options.')
}
