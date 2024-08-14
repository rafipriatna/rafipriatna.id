---
date: 2024-07-26
title: "Bypassing JailMonkey Root Detection"
slug: "bypassing-jailmonkey-root-detection"
description: "Analisis, Exploit, Lewati Pendeteksian Root JailMonkey"
draft: true
---

*JailMonkey* adalah sebuah library yang digunakan dalam pengembangan aplikasi berbasis _React Native_. Fungsinya adalah untuk mengidentifikasi apakah sebuah _smartphone_ telah di-_jailbreak_ (untuk iOS) atau di-_root_ (untuk Android). 

Selain itu, JailMonkey juga dapat mendeteksi lokasi palsu pada _smartphone_ yang diatur dalam “mode pengembang” (khusus untuk Android).

JailMonkey terdiri dari sekumpulan _methods_ yang dapat digunakan pada aplikasi _React Native_ melalui modul `JailMonkey`.

```js
// Contoh penggunaan JailMonkey di React Native
import JailMonkey from 'jail-monkey'

// Apakah perangkat sudah di-jailbreak atau di-root?
JailMonkey.isJailBroken()

// Apakah perangkat bisa mock location? - no need to root!
JailMonkey.canMockLocation()

// Check if device violates any of the above
JailMonkey.trustFall()

// (ANDROID ONLY) Memeriksa apakah aplikasi berjalan pada penyimpanan eksternal
JailMonkey.isOnExternalStorage()

// (ANDROID ONLY) Periksa apakah ponsel memiliki beberapa aplikasi berbahaya yang terinstal
JailMonkey.hookDetected()

// Periksa apakah aplikasi berjalan dalam mode debug
JailMonkey.isDebugged()
```
