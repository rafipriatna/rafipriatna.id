---
date: 2021-08-18T20:23:00+07:00
title: "Tentang Async/Await pada Javascript"
icon: "🖥️"
slug: "async-await-javascript"
tags: ["javascript"]
description: "Penjelasan sederhana mengenai Async/Await pada Javascript."
---

Async/Await merupakan fitur yang ada di Javascript dan sudah ada sejak ES2017. Fitur ini dimaksudkan untuk mempermudah kita dalam membuat suatu fungsi yang asinkronus.

Dan Async/Await merupakan fitur yang membuat bingung saya saat mempelajari Javascript. Untuk itu, saya menulis ini.

## Analogi

Oke, kita mulai dari analogi dulu.

Sebelum kamu pergi ke sekolah jam 07:00 pagi, biasanya kamu harus siap-siap dulu. Misalnya kamu memiliki 5 hal yang harus dilakukan sebelum berangkat ke sekolah:

    1. Mandi
    2. Pakai Seragam
    3. Sarapan
    4. Buka Instagram
    5. Pergi ke sekolah

Lalu kamu diberikan dua pilihan (pilih satu): 1). Melakukan semua hal tersebut secara berurut dari nomor 1 - 5. 2). Melakukan semua hal tersebut tanpa berurut yang penting selesai.

Kamu pilih yang mana? Bukan pilih yang nomor 2, kan? 😂

Jika kamu pilih nomer 2, kamu nggak bisa pakai seragam sebelum mandi atau kamu nggak bisa pergi ke sekolah tanpa pakai seragam. Jadi, urutan itu penting.

Nah, untuk memastikan semua hal dilakukan secara berurut sesuai urutannya, kita butuh pola Async/Await.

## Async/Await

Okey, tadi hanya analogi. Semoga dapat dipahami 😂. Lanjut ke contoh kodenya.

Berikut adalah contoh persiapan di pagi hari.

```Javascript
const kegiatanDiPagiHari = async () => {
    // Kegiatan-kegiatannya ditaruh di sini.
    const kegiatanPertama = await mandi();
    const kegiatanKedua = await pakaiSeragam();
    const kegiatanKetiga = await sarapan();
    const kegiatanKeempat = await bukaInstagram();
    const kegiatanKelima = await pergiKeSekolah();

    return kegiatanKelima;
}
```

Dari contoh kode di atas, pertama-tama kita butuh keyword `async` untuk mengubah fungsi menjadi asinkronus. Diikuti dengan keyword `await` di dalam fungsi tersebut untuk menunggu baris yang sedang dieksekusi selesai dulu sebelum melanjutkan ke baris kode berikutnya.

Dengan begini, program kita akan berjalan sesuai dengan urutannya.

Contoh kasus di Javascript untuk menggunakan Async/Await adalah ketika kita meminta data menggunakan HTTP request ke backend API.

Misalnya:

```Javascript
async getAllBarang() {
    let res = await axios.get("/api/barang");
    return res.data.data;
  },
```

Contoh kode diatas, fungsi getAllBarang bersifat asinkronus. Diikuti dengan HTTP Request GET ke backend pada endpoint `/api/barang` dengan keyword await.

Berarti, program akan menunggu response dari backend terlebih dahulu, baru dilanjutkan dengan return datanya. Bayangkan tanpa Async/Await, maka program akan mengembalikan nilai **null** karena response dari backend belum sampai.