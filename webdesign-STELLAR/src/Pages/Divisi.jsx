import { useEffect, useState } from 'react';
import { FaArrowRight, FaChevronDown, FaTimes } from 'react-icons/fa';
import '../styles/Divisi.css';
import logo from '../assets/Logo.jpg';
import bismit from '../assets/Departemen Bismit.jpg';
import dikmas from '../assets/Departemen Dikmas.jpg';
import dokominfo from '../assets/Departemen Dokominfo.jpg';
import hubeksos from '../assets/Departemen Hubeksos.jpg';
import kaderisasi from '../assets/Departemen Kaderisasi.jpg';
import po from '../assets/Departemen PO.jpg';
import advokasi from '../assets/lembaga advokasi.jpg';
import minatBakat from '../assets/Lembaga Minat Bakat.jpg';

const divisions = [
  {
    group: 'BPH',
    name: 'Badan Pengurus Harian',
    shortName: 'BPH',
    image: logo,
    description: 'Pusat kendali harian yang memastikan arah, administrasi, dan keuangan HIMASANTIKA berjalan selaras.',
    duties: [
      ['Bupati', 'Memimpin, mengawasi, membimbing, dan menentukan arah gerak seluruh kegiatan HIMASANTIKA.'],
      ['Wakil Bupati', 'Mendampingi dan mewakili Bupati dalam menjalankan tugas dan tanggung jawab kepengurusan.'],
      ['Sekretaris Umum', 'Mengelola administrasi, pendataan surat dan pengurus, inventarisasi aset, serta membimbing wakil sekretaris.'],
      ['Wakil Sekretaris', 'Membantu administrasi, menjadi notulis rapat, dan menjadi sekretaris pelaksana kegiatan.'],
      ['Bendahara Umum', 'Mengelola sistem dan transparansi keuangan organisasi, termasuk iuran pengurus.'],
      ['Wakil Bendahara', 'Membantu pengelolaan keuangan dan menjadi bendahara pelaksana kegiatan.'],
    ],
  },
  {
    group: 'LEMBAGA', name: 'Advokasi', shortName: 'Lembaga Advokasi', image: advokasi,
    description: 'Jembatan aspirasi mahasiswa Teknik Informatika menuju forum internal HIMASANTIKA dan program studi.',
    duties: ['Koordinasi rutin bulanan melalui kosma angkatan.', 'Menampung dan menyampaikan aspirasi mahasiswa kepada forum internal dan Kaprodi S1 Teknik Informatika.', 'Meninjau aspirasi setiap tiga bulan untuk memastikan tindak lanjutnya.'],
  },
  {
    group: 'LEMBAGA', name: 'Minat Bakat', shortName: 'Lembaga Minat Bakat', image: minatBakat,
    description: 'Ruang untuk menemukan, mengembangkan, dan menyalurkan potensi mahasiswa, khususnya di bidang teknologi.',
    duties: ['Mengadakan kegiatan pengembangan minat, bakat, dan profesi jurusan.', 'Mendata mahasiswa dengan minat dan bakat khusus di bidang teknologi.', 'Menyalurkan mahasiswa untuk mengikuti perlombaan, dengan prioritas bidang teknologi.'],
  },
  {
    group: 'DEPARTEMEN', name: 'Kaderisasi', shortName: 'Dept. Kaderisasi', image: kaderisasi,
    description: 'Menyiapkan kader yang kuat melalui sistem pembinaan yang terarah dan berkelanjutan.',
    duties: ['Mengumpulkan dan menyusun SOP kaderisasi HIMASANTIKA.', 'Melaksanakan kegiatan kaderisasi.', 'Meningkatkan kualitas kaderisasi HIMASANTIKA.'],
  },
  {
    group: 'DEPARTEMEN', name: 'Dokumentasi, Komunikasi & Informasi', shortName: 'Dept. DOKOMINFO', image: dokominfo,
    description: 'Pusat informasi dan komunikasi bagi mahasiswa Program Studi S1 Teknik Informatika.',
    duties: ['Mengelola email, media sosial, dan majalah dinding.', 'Meliput, mendata, serta mempublikasikan kegiatan HIMASANTIKA.', 'Membuat Kartu Tanda Pengurus sebagai identitas kepengurusan.'],
  },
  {
    group: 'DEPARTEMEN', name: 'Pengembangan Organisasi', shortName: 'Dept. PO', image: po,
    description: 'Menjaga kualitas tata kelola organisasi melalui evaluasi, kajian aturan, dan SOP.',
    duties: ['Mengevaluasi departemen dan lembaga serta mengkaji AD/ART setiap tiga bulan.', 'Merancang dan melaksanakan SOP berdasarkan AD/ART.', 'Mengeluarkan rekomendasi kepada Bupati terkait surat peringatan pengurus.'],
  },
  {
    group: 'DEPARTEMEN', name: 'Pendidikan Mahasiswa', shortName: 'Dept. Dikmas', image: dikmas,
    description: 'Menghubungkan kebutuhan akademik dan profesi jurusan dengan pengalaman belajar yang praktis.',
    duties: ['Berkoordinasi dengan Kaprodi mengenai bidang akademik dan profesi jurusan.', 'Mengadakan workshop, seminar, atau bootcamp untuk mengembangkan profesi mahasiswa.'],
  },
  {
    group: 'DEPARTEMEN', name: 'Hubungan Eksternal & Sosial', shortName: 'Dept. HUBEKSOS', image: hubeksos,
    description: 'Membuka jejaring kolaborasi dan menghadirkan kontribusi HIMASANTIKA bagi masyarakat serta organisasi lain.',
    duties: ['Melaksanakan pengabdian kepada masyarakat sebagai bagian dari Catur Dharma Perguruan Tinggi.', 'Mengadakan kajian atau diskusi sosial.', 'Menjalin hubungan dengan lembaga lain, khususnya anggota PERMIKOMNAS.', 'Membangun hubungan baik dengan ormawa Universitas Muhammadiyah Cirebon.'],
  },
  {
    group: 'DEPARTEMEN', name: 'Bisnis & Kemitraan', shortName: 'Dept. BISMIT', image: bismit,
    description: 'Mengembangkan relasi, peluang kemitraan, dan kemandirian usaha untuk kemajuan HIMASANTIKA.',
    duties: ['Membangun relasi dengan lembaga maupun mitra.', 'Menjadi badan usaha milik himpunan.', 'Mengupayakan pencarian dana yang halal.'],
  },
];

export default function Divisi() {
  const [activeDivision, setActiveDivision] = useState(null);

  useEffect(() => {
    const closeWithEscape = (event) => event.key === 'Escape' && setActiveDivision(null);
    document.addEventListener('keydown', closeWithEscape);
    return () => document.removeEventListener('keydown', closeWithEscape);
  }, []);

  return (
    <section className="divisions-page" id="divisi">
      <div className="divisions-inner">
        <div className="divisions-heading">
          <span className="section-kicker">STRUKTUR KERJA</span>
          <p className="division-index">01 — 09</p>
          <h2>Kenali orang-orang<br /><span>di balik geraknya.</span></h2>
          <p>Setiap kartu menyimpan peran dan tanggung jawabnya. Pilih satu untuk membuka detail.</p>
        </div>

        <div className="division-grid">
          {divisions.map((division, index) => (
            <button className="division-card" key={division.shortName} type="button" style={{ '--card-index': index }} onClick={() => setActiveDivision(division)}>
              <span className="division-number">0{index + 1}</span>
              <img src={division.image} alt={`${division.name} HIMASANTIKA`} />
              <span className="division-overlay"></span>
              <span className="division-meta"><small>{division.group}</small><strong>{division.shortName}</strong></span>
              <span className="division-open">Buka <FaArrowRight aria-hidden="true" /></span>
            </button>
          ))}
        </div>

        <div className="divisions-footnote">
          <span>HIMASANTIKA / UMC</span>
          <p>Daftar dan uraian tugas disusun dari data kepengurusan yang diberikan untuk halaman ini.</p>
          <FaChevronDown aria-hidden="true" />
        </div>
      </div>

      {activeDivision && (
        <div className="division-dialog-backdrop" role="presentation" onClick={() => setActiveDivision(null)}>
          <div className="division-dialog" role="dialog" aria-modal="true" aria-labelledby="division-dialog-title" onClick={(event) => event.stopPropagation()}>
            <button className="division-dialog-close" type="button" onClick={() => setActiveDivision(null)} aria-label="Tutup detail divisi"><FaTimes aria-hidden="true" /></button>
            <img src={activeDivision.image} alt="" aria-hidden="true" />
            <span className="division-dialog-label">{activeDivision.group} / {activeDivision.shortName}</span>
            <h3 id="division-dialog-title">{activeDivision.name}</h3>
            <p className="division-dialog-description">{activeDivision.description}</p>
            <div className="division-duties">
              {activeDivision.duties.map((duty, index) => (
                <div className="duty-item" key={Array.isArray(duty) ? duty[0] : duty}>
                  <span>0{index + 1}</span>
                  <p>{Array.isArray(duty) ? <><strong>{duty[0]}</strong>{duty[1]}</> : duty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}