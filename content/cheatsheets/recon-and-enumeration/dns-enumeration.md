---
title: "DNS Enumeration"
slug: "dns-enumeration"
section: "Recon And Enumeration"
description: "Enumerasi DNS pada port 53."
---

## DNS Enum fron Domain
```bash
$ host www.rafipriatna.id
$ host -t mx rafipriatna.id
$ host -t txt rafipriatna.id
```

## Bruteforce from IP
```bash
$ for ip in $(seq 1 254); do host 192.168.48.$ip; done | grep -v "not found"
```

## DNSRecon
```bash
$ dnsrecon -d rafipriatna.id -t std

# Bruteforce from list.txt
$ dnsrecon -d rafipriatna.id -D ~/list.txt -t brt
```

## DNSEnum
```bash
$ dnsenum rafipriatna.id
```

## NSLookup
```bash
$ nslookup mail.rafipriatna.id
$ nslookup -type=TXT info.rafipriatna.id 192.168.50.151
```
