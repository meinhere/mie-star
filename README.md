# Mie Star

Landing page resmi untuk Mie Star dan Star Moment, dua brand F&B yang tampil dalam satu pengalaman digital. Situs ini menampilkan cerita brand, showcase menu, daftar outlet, channel delivery, penawaran franchise, dan form inquiry untuk calon mitra.

## Tentang Project

Website ini dibangun sebagai landing page marketing untuk memperkenalkan:

- Mie Star sebagai brand mie autentik Indonesia dengan rasa bold dan konsisten.
- Star Moment sebagai brand minuman kopi dan chá yang menemani momen harian.
- Skema franchise dan paket investasi untuk calon mitra.
- Alur kontak langsung melalui form inquiry, email, WhatsApp, dan Instagram.

## Fitur Utama

- Hero section interaktif dengan dua brand utama.
- Brand story dan positioning untuk Mie Star dan Star Moment.
- Showcase menu dan beverage series.
- Section outlet aktif dan daftar lokasi cabang.
- Informasi channel operasional seperti ShopeeFood, GoFood, GrabFood, TikTokGo, Qpon, dan POS system.
- Halaman franchise dengan paket investasi, benefit, dan tahapan kerja sama.
- Form inquiry yang mengirim data ke Cloudflare Worker.
- Floating WhatsApp button untuk akses cepat ke kontak.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- TanStack React Query
- Cloudflare Workers untuk endpoint inquiry
- Resend untuk pengiriman email inquiry

## Struktur Penting

- [src/pages/Home.jsx](src/pages/Home.jsx) untuk urutan section landing page.
- [src/components/landing/](src/components/landing) untuk seluruh section utama.
- [src/lib/AuthContext.jsx](src/lib/AuthContext.jsx) untuk bootstrap auth aplikasi.
- [src/api/base44Client.js](src/api/base44Client.js) untuk stub Base44 di local environment.
- [cloudflare_worker/src/index.js](cloudflare_worker/src/index.js) untuk endpoint form contact.

## Menjalankan Project

### Prasyarat

- Node.js 18 atau lebih baru.
- npm.

### Install dependensi

```bash
npm install
```

### Jalankan development server

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Preview deployment lokal

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Environment Variable

Form inquiry membutuhkan URL endpoint Cloudflare Worker di frontend:

```bash
VITE_CONTACT_API_URL=https://your-worker.example.workers.dev
```

Tanpa variabel ini, form inquiry akan menampilkan error saat submit.

## Cloudflare Worker

Worker contact berada di folder [cloudflare_worker/](cloudflare_worker). Worker ini menerima payload inquiry, memvalidasi input, lalu mengirim email via Resend.

Sebelum deploy, pastikan env berikut tersedia di Worker:

- `FRONTEND_ORIGIN`
- `RESEND_API_KEY`
- `FROM_EMAIL`
- `TO_EMAIL`

## Deploy

### Deploy frontend

```bash
npm run deploy
```

Perintah ini menjalankan build lalu deploy menggunakan Wrangler sesuai konfigurasi proyek.

### Deploy worker kontak

Jalankan deployment dari folder [cloudflare_worker/](cloudflare_worker) dengan konfigurasi Worker yang sesuai.

## Catatan

- Aplikasi ini dirancang sebagai landing page promosi dan franchise, bukan katalog produk e-commerce.
- Konten brand, outlet, dan paket franchise mengikuti data yang sudah ditanam di komponen landing.
