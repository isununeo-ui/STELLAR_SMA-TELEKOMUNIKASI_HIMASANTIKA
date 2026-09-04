import { useState } from 'react';
import '../styles/Kontak.css';
import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok } from 'react-icons/fa';

const Kontak = () => {
  // Menyimpan feedback setelah pengguna mengirim form kontak.
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const subject = encodeURIComponent(`Pesan website dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setFormMessage('Aplikasi email sedang dibuka. Silakan tambahkan alamat tujuan resmi HIMASANTIKA.');
    event.currentTarget.reset();
  };

  return (
    <section className="kontak-section" id="kontak">
      {/* Glow dekoratif menjaga section kontak tetap menyatu dengan tema visual. */}
      <div className="glow-background bottom-glow"></div>

      <div className="kontak-header animate-fade-in">
        <div className="badge-text">HUBUNGI KAMI</div>
        <h2 className="hero-title">Mari <span>Berkolaborasi</span></h2>
        <p className="hero-subtitle">
          Punya pertanyaan, ide inovatif, atau aspirasi? Jangan ragu untuk mengirimkan pesan kepada kami.
        </p>
      </div>

      <div className="kontak-container">
        
        {/* Kolom kiri berisi alamat, email, dan tautan media sosial. */}
        <div className="bento-card kontak-info">
          <h3 className="kontak-title">Informasi Kontak</h3>
          <p className="kontak-desc">Kami selalu terbuka untuk diskusi, aspirasi, kritik, saran, maupun kolaborasi baru.</p>

          <div className="info-list">
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-text">
                <h4>Alamat</h4>
                <p>Jl. Fatahillah No. 40 Watubelah, Sumber Kab. Cirebon</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-text">
                <h4>Email</h4>
                <p><a href="mailto:himasantika@umc.ac.id">himasantika@umc.ac.id</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div className="info-text">
                <h4>No. Telp</h4>
                <p><a href="tel:+6285795483927">085795483927</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FaInstagram /></div>
              <div className="info-text">
                <h4>Instagram Resmi</h4>
                <p><a href="https://www.instagram.com/himasantika_umc/" target="_blank" rel="noreferrer">@himasantika_umc</a></p>
              </div>
            </div>
          </div>

          <div className="social-media">
            <h4>Ikuti Media Sosial Kami</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/himasantika_umc/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@himasantika_umc" target="_blank" rel="noreferrer" className="social-link" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>
        </div>

        {/* Kolom kanan menyediakan form untuk mengirim pesan. */}
        <div className="bento-card kontak-form-wrapper">
          <form className="kontak-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input type="text" id="name" name="name" placeholder="Masukkan nama Anda" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Alamat Email</label>
              <input type="email" id="email" name="email" placeholder="nama@email.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Pesan Anda</label>
              <textarea id="message" name="message" rows="5" placeholder="Tuliskan pesan, aspirasi, atau pertanyaan Anda di sini..." required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Kirim Pesan <span className="arrow-icon">➔</span>
            </button>
            {formMessage && <p className="form-success" role="status">{formMessage}</p>}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Kontak;