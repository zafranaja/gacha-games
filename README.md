# MisticZoo Gacha Simulator

Game simulator gacha hewan interaktif premium berbasis web (HTML/CSS/JS) dengan visual efek glowing modern, sistem claim token pasif, dan pensintesis efek suara retro menggunakan Web Audio API.

## Fitur Utama

- 🪙 **Saldo Awal 10.000 Token**: Memulai petualangan koleksi Anda dengan modal token yang melimpah.
- ⏳ **Sistem Token Pasif per Jam**: Mendapatkan tambahan 100 token setiap jam secara pasif, dilengkapi dengan kalkulator waktu offline (akumulasi token tetap dihitung saat game ditutup).
- 🦁 **Koleksi 30 Hewan Eksotis**: Terbagi ke dalam 4 tingkatan kelangkaan:
  - **Biasa (65%)** - Hijau (Kucing, Anjing, Kelinci, dll.)
  - **Langka (24%)** - Biru (Panda, Koala, Rubah, dll.)
  - **Legendaris (10%)** - Emas (Harimau Sumatra, Komodo Purba, dll.)
  - **Rahasia (1%)** - Pelangi Kosmik (Stardust Unicorn, Astral Phoenix, dll.)
- 🔮 **Animasi Gacha Mistik & Ledakan Telur**: Efek glowing portal yang berubah warna menyesuaikan kelangkaan tertinggi hewan yang berhasil ditarik.
- ⚡ **Fitur Buka Semua**: Kemudahan membuka semua kartu gacha secara berurutan dengan sekali ketuk.
- 🎵 **Web Audio Synth**: Efek suara digital 8-bit retro yang disintesis langsung menggunakan Web Audio API tanpa berkas suara eksternal.

## Cara Menjalankan Secara Lokal

Game ini dibuat dengan menggunakan teknologi web murni (*pure client-side*) tanpa memerlukan server backend atau build steps:

1. Unduh repositori ini.
2. Klik dua kali pada berkas `index.html` menggunakan browser web favorit Anda (Chrome, Edge, Firefox, Safari).
3. Data token dan koleksi Anda akan disimpan secara aman di `localStorage` browser Anda.

## Struktur Direktori

```text
├── assets/
│   └── gacha_banner.jpg      # Banner utama (Hutan Mistik) yang dibuat oleh AI
├── index.html                # Kerangka UI game utama
├── style.css                 # Gaya desain modern glassmorphic & visual efek
├── app.js                    # Logika gacha, audio synth, dan state management
├── .gitignore                # Berkas pengecualian pelacakan Git
└── README.md                 # Dokumentasi proyek
```

---
Dibuat dengan cinta untuk para kolektor hewan mistik.
