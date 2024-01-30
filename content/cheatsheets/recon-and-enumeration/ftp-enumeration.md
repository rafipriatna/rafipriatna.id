---
title: "FTP Enumeration"
slug: "ftp-enumeration"
section: "Recon And Enumeration"
description: "Enumerasi port 21 FTP."
---

## Recon
```bash
$ nmap -p 21 --script=ftp-* <ip> -v2
```

## FTP
```bash
$ ftp <ip>
ftp> put <file> # Upload file
ftp> get <file> # Download file
ftp> ls # Directory listing
```

## Download file rekursif anonymous
```bash
$ wget --recursive --ftp-user=anonymous --ftp-password=any --no-passive-ftp ftp://<IP>
$ wget -r ftp://anonymous:anonymous@<IP>
```

## Bruteforce Login
```bash
$ hydra -L users.txt -P passwords.txt <IP> ftp
```
