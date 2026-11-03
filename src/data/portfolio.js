/**
 * EDIT SEMUA KONTEN DI SINI.
 * Gambar: taruh di public/images/... dan tulis path dimulai dengan /images/...
 * Email, link, dan file CV yang masih kosong memang belum dikonfigurasi.
 * Tidak perlu mengedit komponen React untuk mengganti data di bawah.
 */
export const portfolio = {
  identity: {
    name: 'Irfan Ramadhan',
    shortName: 'IRFAN',
    initials: 'IR',
    outlineName: 'IRFAN RAMADHAN',
    role: 'Software Engineer | UI/UX Design | Hardware Engineer',
    education: 'S1 Teknik Informatika',
    university: 'Universitas Duta Bangsa Surakarta',
    photo: '/images/profile/fotoirpan.png', // GANTI: foto PNG transparan milikmu
    profileAvatar: '/images/propil.jpg.jpeg', // Foto kecil untuk bagian Tentang Saya
    description: 'Saya merupakan lulusan S1 Teknik Informatika yang memiliki ketertarikan besar pada dunia teknologi, Web Development, UI/UX Design dan Creative Editing. Saya senang mengeksplorasi ide-ide kreatif dan mengembangkannya menjadi karya visual maupun solusi digital yang menarik, fungsional, dan mudah digunakan.',
    experienceDescription: 'Saya memiliki pengalaman magang di PT Telkom Akses, dengan keterlibatan dalam kegiatan perencanaan dan penggambaran denah jaringan menggunakan AutoCAD, pemantauan proyek, pengelolaan data infrastruktur, serta dokumentasi teknis. Pengalaman tersebut membantu saya mengembangkan kemampuan teknis, ketelitian, dan pemecahan masalah.',
    personalDescription: 'Saya adalah pribadi yang adaptif, bertanggung jawab, terbuka terhadap tantangan baru, dan senang mempelajari hal-hal baru. Saya terus berupaya menghasilkan karya yang menarik secara visual sekaligus memberikan manfaat.',
    heroTagline: 'Creative Thinking. Solving Digital Problems.',
    heroDescription: 'Saya merangkai ide menjadi visual dan pengalaman digital melalui desain grafis, fotografi, penyuntingan, serta UI/UX.',
    resumeUrl: '/CV.pdf',
  },
  contact: {
    email: 'ramadhanirfan223@gmail.com', 
    instagram: 'https://instagram.com/irfrmdhz', // contoh ''
    linkedin: 'https://www.linkedin.com/in/irfan-ramadhan-496bb73ba?utm_source=share_via&utm_content=profile&utm_medium=member_android', // contoh 'https://linkedin.com/in/username'
    linkedinLabel: 'https://www.linkedin.com/in/irfan-ramadhan',
    github: 'https://github.com/ariantodavid520-max', // contoh 'https://github.com/username'
  },
  projects: [
    {
      id: 'obat', title: 'Penerapan Metode Content-Based Filtering pada Sistem Rekomendasi Obat Non-Resep di Apotek Kusuma Sari', shortTitle: 'Rekomendasi Obat Non-Resep',
      category: 'technical', description: 'Website rekomendasi obat non-resep menggunakan metode Penyaringan Berbasis Konten, TF-IDF, dan Kemiripan Kosinus.',
      tools: ['Next.js', 'React', 'TypeScript'], image: '/images/Screenshot.png', link: 'https://apotek-kusuma-sari.vercel.app/',
    },
    {
      id: 'dimpilfood', title: 'DimpilFood – Online Food Ordering Website', shortTitle: 'DimpilFood',
      category: 'technical', description: 'Website pemesanan makanan secara online.',
      tools: ['Web Development'], image: '/images/dimpilfood.jpeg', link: 'https://github.com/irfrmdhn/foodweb',
    },
    {
      id: 'portal-indonesia', title: 'Portal Indonesia – Information & News Website', shortTitle: 'Portal Indonesia',
      category: 'technical', description: 'Website portal informasi dan berita Indonesia.',
      tools: ['Web Development'], image: '/images/portalindonesia.jpeg', link: 'https://github.com/irfrmdhn/portalindonesia',
    },
    {
      id: 'monitoring', title: 'Desain UI/UX Aplikasi Sistem Monitoring Aktivitas Harian', shortTitle: 'UI/UX Pemantauan Aktivitas',
      category: 'digital', description: 'Rancangan antarmuka dan pengalaman pengguna untuk sistem pemantauan aktivitas harian di PT Telkom Akses.',
      tools: ['Figma', 'UI/UX', 'Pembuatan Prototipe'], image: '/images/Dashboard.png', link: 'https://www.figma.com/design/s7ibAGiZDBT1rmylcGnHjz/Untitled?node-id=0-1&t=RlfahiJKVubs8dqJ-1',
    },
    {
      id: 'school-academic', title: 'Desain UI/UX Aplikasi Sistem Informasi Akademik Sekolah Berbasis Web', shortTitle: 'UI/UX Sistem Akademik Sekolah',
      category: 'digital', description: 'Rancangan antarmuka dan pengalaman pengguna untuk aplikasi sistem informasi akademik sekolah berbasis web.',
      tools: ['Figma', 'UI/UX', 'Pembuatan Prototipe'], image: '/images/Frame.png', link: 'https://www.figma.com/design/zClYWcnWnvxLiEdMUulPnc/Untitled?node-id=0-1&t=RlfahiJKVubs8dqJ-1',
    },
    {
      id: 'design', title: 'Desain Visual & Konten Kreatif', shortTitle: 'Desain Visual & Konten Kreatif',
      category: 'digital', description: 'Kumpulan karya desain grafis, poster, materi promosi, dan eksplorasi visual digital.',
      tools: ['Desain Grafis', 'Phonto', 'Picsart'], image: '/images/design.png', link: '',
    },
    {
      id: 'nursing-learning', title: 'Pengembangan Media Pembelajaran Interaktif Berbasis Mobile pada Materi Keperawatan Dasar untuk Meningkatkan Pemahaman Mahasiswa Keperawatan', shortTitle: 'Media Pembelajaran Interaktif Keperawatan Dasar',
      category: 'digital', description: 'Media pembelajaran interaktif berbasis mobile pada materi keperawatan dasar untuk meningkatkan pemahaman mahasiswa keperawatan.',
      tools: ['Figma', 'UI/UX', 'Pembuatan Prototipe'], image: '/images/prestasi/karya.png', link: 'https://www.figma.com/proto/A9AcWVkZUWR0F2vAwWg4JB/prototype?node-id=94-2&starting-point-node-id=64%3A14&t=EuYKZ3xdvf2LWOxr-1',
    },
    {
      id: 'video', title: 'Cinematic Editing & Visual Storytelling', shortTitle: 'Penyuntingan Sinematik & Penceritaan Visual',
      category: 'digital', description: 'Koleksi proyek penyuntingan video, penceritaan, dan dokumentasi visual.',
      tools: ['Penyuntingan Video', 'Alight Motion', 'CapCut'], image: '/images/weongo.png', link: 'https://www.instagram.com/reel/Dd4WSWYzR6V/?srtk=ZmE5bDM4c3F6bDFr',
    },
  ],
  skills: [
    { name:'Figma', symbol:'Fi', color:'#b6a8fa' },
    { name:'Photoshop', symbol:'Ps', color:'#75b8f9' },
    { name:'Lightroom', symbol:'Lr', color:'#9cccff' },
    { name:'CorelDRAW', symbol:'Cd', color:'#94d9a3' },
    { name:'HTML5', symbol:'5', color:'#f49a74' },
    { name:'CSS3', symbol:'3', color:'#80b5f7' },
    { name:'JavaScript', symbol:'JS', color:'#f7d75a' },
    { name:'React', symbol:'⚛', color:'#71d5ec' },
    { name:'Next.js', symbol:'N', color:'#d1d1da' },
    { name:'MySQL', symbol:'SQL', color:'#80c4d5' },
    { name:'AutoCAD', symbol:'A', color:'#e58075' },
    { name:'After Effects', symbol:'Ae', color:'#b2a2e7' },
  ],
  skillCards: [
    { number:'01', label:'TEKNOLOGI & PENGEMBANGAN', icon:'code', text:'Membangun pengalaman web responsif dengan fondasi pengembangan antarmuka dan teknologi digital.', tags:['HTML','CSS','JavaScript','React JS','Next.js','MySQL'] },
    { number:'02', label:'DESAIN & KREATIVITAS', icon:'palette', text:'Merancang komunikasi visual yang jelas dan menarik melalui desain grafis, desain antarmuka, dan eksplorasi kreatif.', tags:['Desain Grafis','Desain UI/UX','Figma','CorelDRAW','Photoshop','Lightroom'] },
    { number:'03', label:'GAMBAR TEKNIK', icon:'drafting', text:'Mengembangkan ketelitian teknis melalui penggambaran denah dan pemetaan kebutuhan jaringan.', tags:['AutoCAD','Gambar Teknik','Perencanaan Tata Letak Jaringan'] },
    { number:'04', label:'FOTOGRAFI & MULTIMEDIA', icon:'camera', text:'Mengabadikan momen dan menyampaikan cerita melalui fotografi, pengeditan gambar, serta video.', tags:['Fotografi','Penyuntingan Foto','Penyuntingan Video','CapCut'] },
  ],
  current: [
    { label:'MENGEKSPLORASI', value:'Desain Kreatif & Teknologi Digital' },
    { label:'MEMPELAJARI', value:'Pengembangan Web' },
    { label:'TERTARIK PADA', value:'Fotografi & Penceritaan Visual' },
  ],
  traits: ['Pemikir Kreatif','Teliti','Mudah Beradaptasi','Bertanggung Jawab'],
  awards: [
    {
      id:'pkm-2025', title:'Juara 1 — Program Kreativitas Mahasiswa (PKM) 2025',
      organization:'Fakultas Ilmu Kesehatan, Universitas Duta Bangsa Surakarta', year:'Januari 2025',
      description:'Meraih Juara 1 dalam ajang Program Kreativitas Mahasiswa (PKM) 2025 melalui pengembangan ide kreatif dan inovatif.',
      image:'', // GANTI: '/images/achievements/sertifikat-pkm.jpg'
      link:'', // Tautan bukti penghargaan (opsional)
    },
  ],
  // Isi path foto dokumentasi penghargaan sesuai urutan, kosong berarti placeholder.
  awardPhotos: [
    {label:'SERTIFIKAT PKM', image:'/images/prestasi/SERTIFIKAT PKM.jpeg'},
    {label:'FOTO KEGIATAN', image:'/images/prestasi/FOTO KEGIATAN.png'},
    {label:'PENGHARGAAN', image:'/images/prestasi/PENGHARGAAN.jpeg'},
    {label:'PROYEK', image:'/images/prestasi/PROJECT.png'},
  ],
  experience: [
    {
      id:'telkom-akses', title:'PT Telkom Akses — Solo', position:'Magang',
      date:'18 Agustus 2025 – 27 Desember 2025',
      description:'Terlibat dalam perencanaan dan pemantauan proyek pembangunan jaringan telekomunikasi, pembuatan serta revisi denah jaringan menggunakan AutoCAD, pengelolaan data infrastruktur fiber optik, pemantauan progres pekerjaan, administrasi kebutuhan material, serta dokumentasi dan verifikasi hasil pekerjaan lapangan.',
      image:'/images/magang/magang.jpeg',
      gallery:[
        {name:'Dokumentasi kegiatan magang 1', image:'/images/magang/magang.jpeg'},
        {name:'Dokumentasi kegiatan magang 2', image:'/images/magang/magang6.jpeg'},
        {name:'Dokumentasi kegiatan magang 3', image:'/images/magang/magang1.jpeg'},
        {name:'Dokumentasi kegiatan magang 4', image:'/images/magang/magang2.jpeg'},
        {name:'Dokumentasi kegiatan magang 5', image:'/images/magang/magang3.jpeg'},
        {name:'Dokumentasi kegiatan magang 6', image:'/images/magang/magang4.jpeg'},
        {name:'Dokumentasi kegiatan magang 7', image:'/images/magang/magang5.jpeg'},
      ],
    },
  ],
  activities: [], // Data kegiatan kampus/organisasi jika ingin ditambahkan
}
