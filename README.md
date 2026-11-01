# IRFAN RAMADHAN — PERSONAL PORTFOLIO

Website personal portfolio dibuat dengan **React.js + Vite + CSS + Lucide React**, mengacu pada rekaman visual portfolio Richard Miculob yang diberikan dalam percakapan.

> Catatan desain: URL `https://richardmiculob-portfolio.vercel.app/` tidak dapat diakses langsung dari lingkungan pembuatan. Komposisi visual didasarkan pada rekaman referensi yang sebelumnya diberikan, bukan klaim pixel-perfect terhadap website live.

## 1. Cara menjalankan di Windows (VS Code)

1. Ekstrak ZIP. Buka folder hasil ekstrak yang **langsung berisi `package.json`** di VS Code.
2. Buka **Terminal → New Terminal**.
3. Pastikan file `package.json` ditemukan (jalankan `dir package.json`).
4. Jalankan:

```powershell
npm install
npm run dev
```

5. Buka URL lokal yang muncul (biasanya `http://localhost:5173`).

Jika muncul `ENOENT: package.json`, berarti terminal berada di folder yang salah. Masuk ke folder yang memiliki `package.json` melalui `cd`, kemudian ulangi `npm install` dan `npm run dev`.

Untuk build produksi:

```powershell
npm run build
npm run preview
```

## 2. Mengganti identitas, foto, proyek, sertifikat, dan pengalaman

**Semua data berada di satu file:** `src/data/portfolio.js`.

| Elemen | Pengaturan data | Lokasi foto/dokumen |
|---|---|---|
| Foto utama (Hero) | `identity.photo` | `public/images/profile/` |
| Avatar About | `identity.profileAvatar` | `public/images/profile/` |
| Deskripsi, nama, pendidikan | `identity` | — |
| Karya/galeri | `projects[]` | `public/images/projects/` |
| Logo/kemampuan | `skills[]`, `skillCards[]` | `public/images/skills/` |
| Penghargaan PKM | `awards[]` | `public/images/achievements/` |
| Foto kolase penghargaan | `awardPhotos[]` | `public/images/achievements/` |
| Magang PT Telkom Akses | `experience[]` | `public/images/experience/` |
| 4 foto dokumentasi magang | `experience[0].gallery[]` | `public/images/experience/` |
| Organisasi/kegiatan kampus | `activities[]` | `public/images/activities/` |
| Email, Instagram, LinkedIn, GitHub | `contact` | — |
| CV | `identity.resumeUrl` | `public/resume/` |

### Contoh mengganti foto Hero dengan JPEG

1. Simpan foto `foto-irfan.jpeg` di `public/images/profile/`.
2. Ubah `identity.photo` di `portfolio.js` menjadi:

```js
photo: '/images/profile/foto-irfan.jpeg',
```

**Catatan:** JPEG masih memiliki latar foto. Untuk efek tulisan outline bergerak di belakang tubuh, gunakan foto PNG/WebP transparan yang sudah dihapus background-nya. Foto dalam proyek ini merupakan contoh dari gambar yang sebelumnya dibagikan dan dapat diganti kapan saja.

### Contoh mengisi sertifikat PKM

Simpan file `pkm-2025.jpg` di `public/images/achievements/`, lalu:

```js
awards: [{
  id: 'pkm-2025',
  title: 'Juara 1 — Program Kreativitas Mahasiswa (PKM) 2025',
  organization: 'Fakultas Ilmu Kesehatan, Universitas Duta Bangsa Surakarta',
  year: 'Januari 2025',
  description: '...',
  image: '/images/achievements/pkm-2025.jpg',
  link: ''
}],
awardPhotos: [
  {label: 'SERTIFIKAT PKM', image: '/images/achievements/pkm-2025.jpg'},
  // ... foto dokumentasi lainnya
],
```

Untuk menampilkan sertifikat di kolase, isi `awardPhotos[].image`. Array `awards[].image` juga disediakan untuk pengembangan lebih lanjut.

### Contoh mengganti foto dokumentasi magang

```js
experience: [{
  // ...
  image: '/images/experience/telkom-akses.jpg',
  gallery: [
    {name:'Aktivitas kerja', image:'/images/experience/kerja.jpg'},
    {name:'Penggunaan AutoCAD', image:'/images/experience/autocad.jpg'},
    {name:'Lingkungan perusahaan', image:'/images/experience/kantor.jpg'},
    {name:'Dokumentasi pekerjaan', image:'/images/experience/lapangan.jpg'},
  ]
}],
```

## 3. Navigasi dan interaksi

- Navbar kapsul langsung terlihat pada halaman pertama.
- Theme toggle mengubah light/dark mode dan menyimpan preferensi lokal.
- Nama besar di belakang foto memakai **Manrope ExtraBold** dengan outline transparan dan bergerak secara otomatis dari kanan ke kiri.
- Work Gallery bisa digeser dengan **drag mouse**, swipe pada ponsel, tombol panah, klik karya samping, atau tombol keyboard kiri/kanan saat slider fokus.
- Tombol `View More Projects` membuka halaman `/work` dengan Technical dan Beyond Code.
- Hover effects, reveal animations, dan responsivitas tersedia; `prefers-reduced-motion` dihormati.
- Tombol **Send me a message** menggunakan `mailto:` setelah `contact.email` diisi. Tanpa alamat email, akan menampilkan petunjuk konfigurasi—bukan klaim pesan sukses palsu.
- Tautan unduh CV dan link proyek hanya muncul bila URL valid sudah diisi.

## 4. Struktur proyek

```text
package.json
index.html
vite.config.js
vercel.json
src/
  main.jsx
  App.jsx
  index.css
  data/portfolio.js
  components/
    Navbar.jsx
    Hero.jsx
    SelectedWork.jsx
    Skills.jsx
    About.jsx
    Awards.jsx
    Trainings.jsx
    Contact.jsx
    Footer.jsx
  pages/
    Home.jsx
    WorkGallery.jsx
public/
  images/
    profile/
    projects/
    achievements/
    experience/
    activities/
    skills/
  resume/
```

## 5. Catatan pengujian

Seluruh komponen JSX telah ditranspilasi dan halaman utama berhasil dirender sebagai HTML untuk validasi struktur. Import relatif dan aset lokal telah diperiksa. Namun, pengujian `npm run build` dan pemeriksaan visual browser end-to-end belum dapat diselesaikan di lingkungan pembuatan akibat tidak tersedianya registry npm serta pembatasan browser. Jalankan kedua perintah di Windows sesuai petunjuk di atas.

Seluruh gambar preview proyek masih placeholder visual kategori. Unggah karya asli agar portofolio merepresentasikan hasil kerja sebenarnya.
