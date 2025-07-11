// lib/password.js

function generatePassword(options) {
  const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    special: '!@#$%^&*()_+[]{}<>?'
  };

  const selectedSets = Object.entries(charSets)
    .filter(([key]) => !options[`no${key.charAt(0).toUpperCase() + key.slice(1)}`])
    .map(([, value]) => value);

  if (selectedSets.length === 0) {
    throw new Error('At least one character type must be selected.');
  }

  const allChars = selectedSets.join('');
  return Array.from({ length: options.length }, () =>
    allChars[Math.floor(Math.random() * allChars.length)]
  ).join('');
}

module.exports = { generatePassword };
