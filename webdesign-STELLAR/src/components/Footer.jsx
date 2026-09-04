
import '../styles/Footer.css';
import { FaInstagram, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  // Tahun copyright selalu mengikuti tahun kalender saat ini.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      {/* Garis aksen pembuka footer. */}
      <div className="footer-top-border"></div>

      <div className="footer-container">
        
        {/* Kolom brand, deskripsi singkat, dan media sosial. */}
        <div className="footer-brand">
          <h2>HIMA<span>SANTIKA</span></h2>
          <p className="brand-desc">
            Himpunan Mahasiswa Jurusan Teknik Informatika Universitas Muhammadiyah Cirebon. Wadah aspirasi, inovasi, dan pengembangan organisasi mahasiswa.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/himasantika_umc/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@himasantika_umc" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>

        {/* Tautan internal menuju section website. */}
        <div className="footer-links">
          <h3>Navigasi</h3>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">Tentang Kami</a></li>
            <li><a href="#keanggotaan">Keanggotaan</a></li>
            <li><a href="#galeri">Galeri Kegiatan</a></li>
            <li><a href="#kontak">Hubungi Kami</a></li>
          </ul>
        </div>

        {/* Tautan eksternal menuju website kampus. */}
        <div className="footer-links">
          <h3>Tautan Terkait</h3>
          <ul>
            <li><a href="https://umc.ac.id" target="_blank" rel="noreferrer">Universitas Muhammadiyah Cirebon</a></li>
            <li><a href="https://ft.umc.ac.id" target="_blank" rel="noreferrer">Fakultas Teknik UMC</a></li>
          </ul>
        </div>

        {/* Informasi alamat dan email sekretariat. */}
        <div className="footer-info">
          <h3>Sekretariat</h3>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>Jl. Fatahillah, Watubelah, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611</p>
          </div>
          <div className="info-item">
            <FaInstagram className="info-icon" />
            <p>@himasantika_umc</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} HIMASANTIKA Universitas Muhammadiyah Cirebon. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="divider">•</span>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;