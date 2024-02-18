---
title: "SMTP Enumeration"
slug: "smtp-enumeration"
section: "Recon And Enumeration"
description: "Enumerasi SMTP pada port 25, 465 dan 587."
---

## Enumeration
```bash
$ nc -nv <IP> 25 # Version Detection

# -M means mode, it can be RCPT, VRFY, EXPN
$ smtp-user-enum -M VRFY -U username.txt -t <IP> 
```

## Send Email with credentials
```bash
$ sudo swaks -t user@target.com -t user2@target.com --from me@rafipriatna.id --server <mailserver-IP> --body @body.txt --header "Test" --suppress-data -ap
```