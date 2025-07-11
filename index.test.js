import { describe, it, expect } from 'vitest';
import { generatePassword } from './index.js';

describe('generatePassword()', () => {
  it('harus menghasilkan password dengan panjang yang benar', () => {
    const password = generatePassword({ length: 10 });
    expect(password.length).toBe(10);
  });

  it('harus mengandung huruf besar jika tidak dinonaktifkan', () => {
    const password = generatePassword({ length: 20 });
    expect(/[A-Z]/.test(password)).toBe(true);
  });

  it('boleh tanpa angka kalau noNumbers true', () => {
    const password = generatePassword({
      length: 20,
      noNumbers: true
    });
    expect(/\d/.test(password)).toBe(false);
  });

  it('harus error jika semua jenis karakter dimatikan', () => {
    expect(() => {
      generatePassword({
        length: 12,
        noNumbers: true,
        noUppercase: true,
        noLowercase: true,
        noSpecial: true
      });
    }).toThrow();
  });
});
