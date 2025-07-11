const { Command } = require('commander');
const program = new Command();

program
.version('1.0.0')
.description('secure password generator with options on the terminal')
.parse();

if (program.args.length === 0) {
    program.help();
}
