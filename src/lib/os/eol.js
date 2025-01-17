import os from 'node:os';
import chalk from 'chalk';

export default function getOSInformation(arg) {
  if (!arg) {
    console.log(chalk.red('No arguments provided for os.'));
  }
  switch (arg) {
    case '--EOL':
      getEOL();
      break;
    case '--cpus':
      getCPUInfo();
      break;
    case '--homedir':
      getHomeDir();
      break;
    case '--username':
      getUserName();
      break;
    case '--architecture':
      getArchitecture();
      break;
    default:
      console.log(chalk.red('Invalid os command.'));
  }
}

function getEOL() {
  const eol = os.EOL;
  console.log(`End-Of-Line (EOL) character: "${eol === '\n' ? '\\n' : '\\r\\n'}"`);
}

function getCPUInfo() {
  const cpus = os.cpus();
  const cpuInfo = cpus.map((cpu, index) => ({
    Core: index + 1,
    Model: cpu.model,
    'Clock Rate (MHz)': cpu.speed,
  }));

  console.log({
    'Total CPU Count': cpus.length,
    'CPU Details': cpuInfo,
  });
}

function getHomeDir() {
  const homeDir = os.homedir();
  console.log(homeDir);
}

function getUserName() {
  const userName = os.userInfo().username;
  console.log(chalk.green('Current system username:'), userName);
}

function getArchitecture() {
  const architecture = os.arch();
  console.log(chalk.green('CPU architecture:'), architecture);
}
