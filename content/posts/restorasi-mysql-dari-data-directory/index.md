---
date: 2020-08-20T16:22:29+07:00
title: "Restorasi MySQL Dari Data Directory"
slug: "restorasi-mysql-dari-data-directory"
tags: [
    "recovery",
    "backup",
    "mysql",
    "mariadb"
]
description: "Cara restorasi MySQL dari data directory."
---

Pada tanggal 19 Agustus 2020, saya mengalami kendala pada server CentOS 8 saya. Di mana saya melakukan upgrade UEFI, dan hasilnya server tidak dapat dinyalakan kembali. Berdasarkan informasi dari penyedia server, nampaknya terdapat kegagalan pemasangan GRUB. Sehingga, saya harus menginstall ulang server tersebut (Saya menggunakan VPS).

Setelah mendapat keterangan tersebut, sayapun sedikit panik karena saya belum melakukan backup pada server, termasuk SQLnya. Lalu, saya menghubungi penyedia VPS kembali untuk meminta file direktori mentah dari server saya, yang terdiri dari file-file NGINX, dan file dari direktori `/var/lib/mysql`.

Untuk file NGINX masih aman, nah untuk mysql ini yang sedikit membingungkan pada awalnya. Saya mencoba meng-copy file mysql tersebut ke laptop saya. Dan databasenya terbaca, namun terjadi galat "tabel tidak ditemukan". Lalu, setelah saya mencoba searching-searching di internet, saya menemukan solusinya.

## Restorasi MySQL
Sebelum restorasi dilakukan, pastikan versi MySQL yang digunakan sama persis dengan server sebelumnya. Untuk melihat versinya, silakan buka file `mysql_upgrade_info` yang ada di direktori `/var/lib/mysql` di direktori backup atau server yang lama / rusak.

Jika sudah sama versinya, sekarang saatnya melakukan restorasi. Pada artikel kali ini, saya akan melakukan restorasi ke laptop lokal saya, namun bisa juga langsung dilakukan ke server yang baru.

Pertama-tama, silakan `matikan service mysql` terlebih dahulu, lalu copy **hanya** direktori database (yang ingin direstorasi) yang ada di direktori backup `/var/lib/mysql` ke direktori `/var/lib/mysql` yang ada di lokal. Setelah itu, copy file ib (ibdata1, ib_logfile0, ib_logfile1) yang ada di drektori backup ke direktori mysql lokal, sama seperti meng-copy direktori database. Terakhir adalah ganti chown file-file yang sudah dicopy. Bentuk commandnya seperti berikut dari awal hingga akhir :

Misalkan /home/rafi/backup adalah direktori backup saya.

Copy file database dari backup ke lokal

```bash
sudo cp -rf /home/rafi/backup/var/lib/mysql/database_saya /var/lib/mysql/
```

Copy file ib dari backup ke lokal
```bash
sudo cp /home/rafi/backup/var/lib/mysql/ibdata1 /var/lib/mysql
sudo cp /home/rafi/backup/var/lib/mysql/ib_logfile0 /var/lib/mysql
sudo cp /home/rafi/backup/var/lib/mysql/ib_logfile1 /var/lib/mysql
```

Ganti chown direktori dan file yang sudah dicopy
```bash
sudo chown -R mysql:mysql /var/lib/mysql/database_saya
sudo chmod -R 660 /var/lib/mysql/database_saya
sudo chown  mysql:mysql /var/lib/mysql/database_saya 
sudo chmod 700 /var/lib/mysql/database_saya
sudo chown mysql:mysql /var/lib/mysql/ibdata1
sudo chown -R mysql:mysql /var/lib/mysql/ib_logfile0
sudo chown -R mysql:mysql /var/lib/mysql/ib_logfile1
```

Sampai sini sudah selesai, jika dilakukan di lokal, kita bisa export ke sql
```bash
mysqldump -u rafi -p database_saya > database_saya.sql
```

Setelah itu, file hasil dumpnya bisa diimport ke server production yang baru :D

#### Referensi
https://stackoverflow.com/a/43175810
