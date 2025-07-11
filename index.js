#!/usr/bin/env node

const { Command } = require('commander');
const { generatePassword } = require('./lib/password');
const clipboard = require('clipboardy');
const fs = require('fs-extra');

const program = new Command();

program
  .name('passwordgen')
  .description('🔐 Generate secure password(s) with custom options')
  .arguments('[length] [count]')
  .option('-u, --no-uppercase', 'Exclude uppercase letters')
  .option('-w, --no-lowercase', 'Exclude lowercase letters')
  .option('-n, --no-numbers', 'Exclude numbers')
  .option('-s, --no-special', 'Exclude special characters')
  .option('--copy', 'Copy last password to clipboard')
  .option('--output <file>', 'Write passwords to file')
  .helpOption('-h, --help', 'Display help for command')
  .action(async (length, count, options) => {
    const len = parseInt(length) || 12;
    const total = parseInt(count) || 1;

    if (len <= 0 || total <= 0) {
      console.error('❌ Panjang dan jumlah harus lebih dari 0');
      process.exit(1);
    }

    const list = [];

    for (let i = 0; i < total; i++) {
      const pass = generatePassword({
        length: len,
        noUppercase: options.noUppercase,
        noLowercase: options.noLowercase,
        noNumbers: options.noNumbers,
        noSpecial: options.noSpecial,
      });

      console.log(`🔐 Password ${i + 1}: ${pass}`);
      list.push(pass);
    }

    if (options.copy) {
      await clipboard.write(list.at(-1));
      console.log('📋 Password terakhir disalin ke clipboard!');
    }

    if (options.output) {
      await fs.outputFile(options.output, list.join('\n'));
      console.log(`💾 Disimpan di file: ${options.output}`);
    }
  });

program.on('--help', () => {
  console.log('\nContoh:');
  console.log('  $ passwordgen 16 5 -u -n');
  console.log('  $ passwordgen 20 --copy');
  console.log('  $ passwordgen 12 --output pass.txt');
});

program.parse();
