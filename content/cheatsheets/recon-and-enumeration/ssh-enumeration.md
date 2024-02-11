---
title: "SSH Enumeration"
slug: "ssh-enumeration"
section: "Recon And Enumeration"
description: "Enumerasi port 22 SSH."
---

## Login
```bash
$ ssh username@IP

# Login with SSH to specific port
$ ssh username@IP -p 443
```

## Login with key
```bash
$ chmod 600 id_rsa/id_ecdsa
$ ssh username@IP -i id_rsa/id_ecdsa
```

## Crack id_rsa or id_ecdsa password
```bash
$ ssh2john id_ecdsa/id_rsa > hash
$ john --wordlist=/usr/share/wordlists/rockyou.txt hash
```

## Bruteforce
```bash
# Bruteforce SSH with list of passwords
$ hydra -l username -P passwords.txt <IP> ssh

# Bruteforce SSH with list of usernames
$ hydra -L usernames.txt -P passwords.txt <IP> ssh
```