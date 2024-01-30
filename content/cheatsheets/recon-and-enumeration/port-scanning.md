---
title: "Port Scanning"
slug: "port-scanning"
section: "Recon And Enumeration"
description: "Mencari PORT yang terbuka dari target menggunakan NMAP dan NetCat."
---

## NMAP
### TCP
```bash
$ nmap -p- -sVC -oN nmap_all_tcp_ports.txt <IP> -v2 # Ambil semua port UDP terbuka
$ nmap -p "80, 22, 21, 8080" -sVSC -A -oN nmap_detailed_all_tcp_ports.txt <IP> -v2 # Cek detil service port UDP yang terbuka
```

### UDP
```bash
$ nmap -p- -sU -oN nmap_all_udp_ports.txt <IP> -v2 # Ambil semua port UDP terbuka
$ nmap -p "123, 53" -sUVS -A -oN nmap_detailed_all_udp_ports.txt <IP> -v2 # Cek detil service port UDP yang terbuka
```
Tambahkan `-Pn` jika NMAP tidak memberikan hasil port terbuka apapun.

Dapat ditambahkan juga `--min-rate 1000` atau `T1-4` supaya NMAP melakukan scanning-nya jadi lebih cepat, tapi membuat _bandwith_ lebih banyak. Hati-hati pakai ini, karena bisa membuat **_target down_**.

## NetCat
> NetCat bukanlah port scanner, tapi bisa dipakai untuk mencari port yang terbuka kalo ga ada NMAP.
### TCP
```bash
$ nc -nvv -w 1 -z <IP> 1-65535 # Scan port TCP dari 1 - 65535
```
### UDP
```bash
$ nc -nv -u -z -w 1 <UDP> 120-123 # Scan port UDP dari 120 - 123
```
