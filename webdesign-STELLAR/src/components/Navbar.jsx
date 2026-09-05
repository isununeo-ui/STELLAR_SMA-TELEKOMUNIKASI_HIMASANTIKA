import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import logoHimasantika from '../assets/Logo.jpg';
import logoPermikomnas from '../assets/Logo Permikomnas.jpg';

function Navbar() {
  // State tema mengontrol atribut data-theme pada elemen html.
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State ini mengatur apakah modal autentikasi sedang terlihat.
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  // Mode modal dapat berupa signin atau signup.
  const [authMode, setAuthMode] = useState('signin');
  // Pesan hasil submit ditampilkan di bawah form.
  const [authMessage, setAuthMessage] = useState('');
  // Menandai section yang sedang berada di area pandang pengguna.
  const [activeSection, setActiveSection] = useState('Home');

  // Mengubah atribut tema di HTML saat state berubah
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // IntersectionObserver membuat menu mengikuti posisi scroll tanpa listener berat.
    const sections = ['Home', 'About', 'program-kerja', 'galeri', 'keanggotaan', 'divisi', 'kontak']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const visibility = new Map(sections.map((section) => [section.id, 0]));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        const visibleSection = sections
          .filter((section) => visibility.get(section.id) > 0)
          .sort((first, second) => visibility.get(second.id) - visibility.get(first.id))[0];
        if (visibleSection) setActiveSection(visibleSection.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    // Membalik mode tema ketika ikon matahari/bulan ditekan.
    setIsDarkMode(!isDarkMode);
  };

  const openAuth = () => {
    // Modal selalu dibuka pada mode Sign In dengan pesan lama dibersihkan.
    setAuthMode('signin');
    setAuthMessage('');
    setIsLoginOpen(true);
  };

  const handleAuthSubmit = (event) => {
    // Mencegah reload dan memproses akun demo di browser.
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email').trim().toLowerCase();
    const password = formData.get('password');

    if (authMode === 'signup') {
      // Akun demo disimpan lokal karena project belum memakai backend.
      localStorage.setItem('himasantika-user', JSON.stringify({ email, password }));
      setAuthMode('signin');
      setAuthMessage('Akun berhasil dibuat. Silakan Sign In.');
      event.currentTarget.reset();
      return;
    }

    // Sign In mencocokkan kredensial dengan akun yang tersimpan sebelumnya.
    const savedUser = JSON.parse(localStorage.getItem('himasantika-user') || 'null');
    if (savedUser?.email === email && savedUser.password === password) {
      setAuthMessage('Sign In berhasil. Selamat datang kembali.');
    } else {
      setAuthMessage('Email atau password belum sesuai.');
    }
  };

  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <div className="logo-group" aria-label="Logo organisasi">
          <div className="logo-icon himasantika-logo">
            <img src={logoHimasantika} alt="Logo HIMASANTIKA" />
          </div>
          <div className="logo-icon permikomnas-logo">
            <img src={logoPermikomnas} alt="Logo Permikomnas" />
          </div>
        </div>
        <div className="logo-text">
          <h1>HIMASANTIKA</h1>
          <p>HIMPUNAN MAHASISWA JURUSAN TEKNIK INFORMATIKA</p>
        </div>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#Home" className={activeSection === 'Home' ? 'active' : ''}>Home</a></li>
        <li><a href="#About" className={activeSection === 'About' ? 'active' : ''}>About</a></li>
        <li><a href="#program-kerja" className={activeSection === 'program-kerja' ? 'active' : ''}>Program Kerja</a></li>
        <li><a href="#galeri" className={activeSection === 'galeri' ? 'active' : ''}>Galeri</a></li>
        <li><a href="#divisi" className={activeSection === 'divisi' ? 'active' : ''}>Divisi</a></li>
        <li><a href="#kontak" className={activeSection === 'kontak' ? 'active' : ''}>Kontak</a></li>
      </ul>

      <div className="navbar-actions">
        {/* Tombol ganti tema dengan ikon yang berubah sesuai mode aktif. */}
        <button 
          onClick={toggleTheme} 
          className="btn-theme-toggle"
          title="Ganti Tema"
          aria-label={isDarkMode ? 'Gunakan mode terang' : 'Gunakan mode gelap'}
        >
          {isDarkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
        </button>

        <button className="btn-signup" type="button" onClick={openAuth}>
          Sign In
        </button>
      </div>

      {/* Modal autentikasi hanya dirender saat tombol Sign In dibuka. */}
      {isLoginOpen && (
        <div className="login-backdrop" onClick={() => setIsLoginOpen(false)}>
          <div className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title" onClick={(event) => event.stopPropagation()}>
            <button className="login-close" type="button" onClick={() => setIsLoginOpen(false)} aria-label="Tutup login">
              <FaTimes aria-hidden="true" />
            </button>
            <p className="login-eyebrow">Akun HIMASANTIKA</p>
            <div className="auth-tabs" role="tablist" aria-label="Pilih akses akun">
              <button className={authMode === 'signin' ? 'active' : ''} type="button" onClick={() => { setAuthMode('signin'); setAuthMessage(''); }} role="tab" aria-selected={authMode === 'signin'}>Sign In</button>
              <button className={authMode === 'signup' ? 'active' : ''} type="button" onClick={() => { setAuthMode('signup'); setAuthMessage(''); }} role="tab" aria-selected={authMode === 'signup'}>Sign Up</button>
            </div>
            <h2 id="login-title">{authMode === 'signin' ? 'Masuk ke HIMASANTIKA' : 'Buat akun baru'}</h2>
            <form className="login-form" onSubmit={handleAuthSubmit}>
              <label htmlFor="login-email">Email</label>
              <input id="login-email" name="email" type="email" placeholder="nama@email.com" required />
              <label htmlFor="login-password">Password</label>
              <input id="login-password" name="password" type="password" placeholder="Masukkan password" minLength="6" required />
              <button className="login-submit" type="submit">{authMode === 'signin' ? 'Sign In' : 'Buat Akun'}</button>
            </form>
            {authMessage && <p className="auth-message" role="status">{authMessage}</p>}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
