import { FaInstagram } from 'react-icons/fa';
import '../styles/Keanggotaan.css';

export default function Keanggotaan() {
  return (
    <section className="org-container" id="keanggotaan">
      <div className="org-chart membership-content">
        <div className="org-heading">
          <span className="section-kicker">KEANGGOTAAN</span>
          <h2>HIMASANTIKA <span>UMC</span></h2>
          <p>HIMASANTIKA adalah Himpunan Mahasiswa Jurusan Teknik Informatika Universitas Muhammadiyah Cirebon.</p>
        </div>
        <div className="membership-notice">
          <FaInstagram aria-hidden="true" />
          <h3>Informasi Anggota 2026</h3>
          <p>Susunan pengurus dan data anggota periode 2026 belum dipublikasikan pada sumber resmi yang dapat diverifikasi.</p>
          <a href="https://www.instagram.com/himasantika_umc/" target="_blank" rel="noreferrer">Lihat informasi terbaru di Instagram resmi</a>
        </div>
      </div>
    </section>
  );
}
