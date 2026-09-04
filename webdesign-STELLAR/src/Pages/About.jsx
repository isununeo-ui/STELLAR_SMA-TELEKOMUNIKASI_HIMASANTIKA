import '../styles/About.css';

const About = () => {
  return (
    // Section ini menjelaskan identitas, visi, dan misi organisasi.
    <section className="about-modern-section" id="About">
      {/* Ornamen dekoratif ditempatkan di belakang konten utama. */}
      <div className="glow-background top-glow"></div>
      
      <div className="about-header animate-fade-in">
        <div className="badge-text">DISCOVER OUR STORY</div>
        <h1 className="hero-title">Tentang <span>Himasantika</span></h1>
        <p className="hero-subtitle">
          Membangun sinergi, inovasi, dan integritas di ruang lingkup Teknik Informatika Universitas Muhammadiyah Cirebon.
        </p>
      </div>

      <div className="about-bento-container">
        
        {/* Kartu besar berisi gambaran umum HIMASANTIKA. */}
        <div className="bento-card bento-overview">
          <div className="card-glow"></div>
          <div className="card-label">SIAPA KAMI?</div>
          <h2 className="section-title">Lebih dari Sekadar <br/> Organisasi Kampus.</h2>
          <p className="section-text">
            <strong>HIMASANTIKA</strong> adalah Himpunan Mahasiswa Jurusan Teknik Informatika Universitas Muhammadiyah Cirebon.
            <br/><br/>
            Informasi kegiatan yang terverifikasi pada 2026 mencakup kolaborasi Teknologi untuk Desa bersama HMTI UMC dan sembilan kampus Muhammadiyah 'Aisyiyah, sebagaimana diberitakan di situs resmi UMC.
          </p>
        </div>

        {/* Kartu visi organisasi. */}
        <div className="bento-card bento-vision">
          <div className="vm-header">
            <div className="icon-box vision-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3>Visi Kami</h3>
          </div>
          <p className="section-text">
            Informasi visi resmi periode 2026 belum ditemukan pada sumber publik UMC atau akun resmi HIMASANTIKA. Bagian ini akan diperbarui setelah organisasi mempublikasikan pernyataan resminya.
          </p>
        </div>

        {/* Kartu misi organisasi dalam bentuk daftar. */}
        <div className="bento-card bento-mission">
          <div className="vm-header">
            <div className="icon-box mission-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Misi Utama</h3>
          </div>
          <ul className="mission-list">
            <li>Kolaborasi Teknologi untuk Desa diberitakan oleh situs resmi UMC pada 12 April 2026.</li>
            <li>Kegiatan tersebut melibatkan HMTI dan HIMASANTIKA UMC.</li>
            <li>Kolaborasi dilakukan bersama sembilan kampus Muhammadiyah 'Aisyiyah.</li>
            <li>Rincian misi resmi periode 2026 belum dipublikasikan pada sumber publik yang ditemukan.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;