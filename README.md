
-----

# 🔐 PasswordGen.js

**PasswordGen.js** adalah generator kata sandi *command-line interface* (CLI) yang **cepat, aman, dan dapat disesuaikan**, dibangun dengan Node.js. Alat ini memungkinkan kamu untuk membuat kata sandi yang kuat dengan kontrol penuh atas panjang dan jenis karakter yang disertakan, menjadikannya solusi ideal untuk kebutuhan keamanan digital kamu.

-----

## ✨ Fitur Utama

* **Panjang Kata Sandi Kustom**: Tentukan panjang kata sandi yang diinginkan, dari yang pendek hingga sangat panjang.
* **Kontrol Tipe Karakter**: Sertakan atau kecualikan jenis karakter berikut sesuai kebutuhan:
  * Huruf Kapital (A-Z)
  * Huruf Kecil (a-z)
  * Angka (0-9)
  * Karakter Spesial (\!@\#$%^&\*)
* **Penggunaan CLI yang Intuitif**: Antarmuka baris perintah yang sederhana dan mudah digunakan.
* **Teruji Penuh**: Memastikan keandalan dan keamanan dengan *test suite* menggunakan Vitest ✅.

-----

## 🚀 Penggunaan

### Contoh

Berikut adalah beberapa contoh penggunaan untuk membantu kamu memulai:

* **Default**: Hasilkan kata sandi 12 karakter dengan semua jenis karakter (huruf besar, huruf kecil, angka, dan simbol).

    ```bash
    passwordgen
    ```

* **Panjang Kustom**: Hasilkan kata sandi 26 karakter.

    ```bash
    passwordgen 26
    ```

* **Tanpa Simbol & Angka**: Hasilkan kata sandi 20 karakter tanpa menyertakan simbol dan angka.

    ```bash
    passwordgen 20 -s -n
    ```

* **Tanpa Huruf Besar & Huruf Kecil**: Hasilkan kata sandi 16 karakter yang hanya berisi angka dan simbol.

    ```bash
    passwordgen 16 -l -u
    ```

* **Alternatif**: Hasilkan 5 kata sandi dengan panjang 16 karakter, dengan opsi untuk menyertakan atau mengecualikan jenis karakter tertentu.

    ```bash
    passwordgen 16 -w -s -u -n
    ```

-----

Dengan **PasswordGen.js**, kamu dapat dengan mudah menghasilkan kata sandi yang kuat dan aman sesuai dengan kebutuhan spesifik kamu. Selamat mencoba!