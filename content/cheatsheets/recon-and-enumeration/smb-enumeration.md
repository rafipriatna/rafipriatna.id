---
title: "SMB Enumeration"
slug: "smb-enumeration"
section: "Recon And Enumeration"
description: "Enumerasi port 445/139 SMB."
---

## SMB Scan
```bash
$ nbtscan -r 192.168.48.0/24
$ nbtscan -r 192.168.48.23
```

## Crackmapexec
```bash
$ crackmapexec smb <IP/range>

# Login SMB
$ crackmapexec smb <IP> -u username -p password

# Password spraying
$ crackmapexec smb <IP> -u usernames.txt -p passwords.txt --continue-on-success

# List available shares
$ crackmapexec smb <IP> -u username -p password --shares

# List all users
$ crackmapexec smb <IP> -u username -p password --users

# Get all information
$ crackmapexec smb <IP> -u username -p password --all

# Specific port
$ crackmapexec smb <IP> -u username -p password -p 445

# Include domain
$ crackmapexec smb <IP> -u username -p password -d domain
```

## SMBClient
```bash
$ smbclient -L //IP
$ smbclient //server/share
$ smbclient //server/share -U <username>
$ smbclient //server/share -U domain/username
```

## SMBMap
```bash
$ smbmap -H <IP>
$ smbmap -H <IP> -u <username> -p <password>
$ smbmap -H <IP> -u <username> -p <password> -d <domain>
$ smbmap -H <IP> -u <username> -p <password> -r <share>
```

## Jika sudah masuk ke sesi SMB
```bash
put <file> #to upload file
get <file> #to download file
```

## Download shares secara rekursif
```bash
mask ""
recurse ON
prompt OFF
mget *
```