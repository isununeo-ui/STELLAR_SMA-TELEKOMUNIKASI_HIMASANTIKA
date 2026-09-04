import { useEffect, useState } from 'react';
import { FaLightbulb, FaLaptopCode, FaSearch, FaUsers } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import About from './About';
import ProgramKerja from './ProgramKerja';
import Footer from '../components/Footer'; 
import indonesia from '../assets/indonesia.jpg';
import Galeri from './Galeri';
import Kontak from './Kontak';
import Keanggotaan from './Keanggotaan';
import Divisi from './Divisi';

function Home() {
  // Menyimpan kata kunci yang diketik pada pencarian section halaman.
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Menjalankan animasi ketika kartu benar-benar masuk ke viewport.
    const animatedElements = document.querySelectorAll('.animate-slide-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    animatedElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const homeContainer = document.querySelector('.home-container');
    if (!homeContainer) return undefined;

    const handlePointerMove = (event) => {
      homeContainer.style.setProperty('--pointer-x', `${event.clientX}px`);
      homeContainer.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Mencari section berdasarkan nama lalu melakukan scroll halus ke hasilnya.
  const handlePageSearch = (event) => {
    event.preventDefault();
    // Daftar tujuan pencarian dipetakan ke id section yang tersedia di halaman.
    const pages = [
      { name: 'Home', id: 'Home' },
      { name: 'About', id: 'About' },
      { name: 'Program Kerja', id: 'program-kerja' },
      { name: 'Galeri', id: 'galeri' },
      { name: 'Keanggotaan', id: 'keanggotaan' },
      { name: 'Divisi', id: 'divisi' },
      { name: 'Kontak', id: 'kontak' },
    ];
    const page = pages.find(({ name }) => name.toLowerCase().includes(searchQuery.trim().toLowerCase()));

    if (page) {
      document.getElementById(page.id)?.scrollIntoView({ behavior: 'smooth' });
      setSearchQuery('');
    }
  };

  return (
    <>
      <div className="home-container">
        {/* Top bar berisi bahasa, shortcut keanggotaan, dan pencarian halaman. */}
        <div className="top-bar">
          <div className="top-bar-left">
            <img src={indonesia} alt="Indonesian Flag" />
            <span>Indonesian</span>
          </div>
          <div className="top-bar-right">
            <a href="https://umc.ac.id/" target="_blank" rel="noreferrer">UMC Official</a>
            <span className="top-bar-divider" aria-hidden="true"></span>
            <a href="#keanggotaan">Keanggotaan</a>
            <form className="page-search" onSubmit={handlePageSearch} role="search">
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Cari halaman"
                aria-label="Cari halaman"
              />
              <button type="submit" aria-label="Cari halaman" title="Cari halaman">
                <FaSearch aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <Navbar />

        {/* Hero memperkenalkan HIMASANTIKA dan menyediakan CTA utama. */}
        <section id="Home" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-tech-ornament" aria-hidden="true">
            <span className="tech-node node-one"></span>
            <span className="tech-node node-two"></span>
            <span className="tech-node node-three"></span>
            <span className="tech-icon icon-code"><FaLaptopCode /></span>
            <span className="tech-icon icon-users"><FaUsers /></span>
            <span className="tech-icon icon-idea"><FaLightbulb /></span>
            <span className="tech-label">HIMA / IT / UMC</span>
          </div>
          <div className="hero-content">
            <div className="hero-kicker">HIMASANTIKA • UNIVERSITAS MUHAMMADIYAH CIREBON</div>
            <h1>
              Himpunan Mahasiswa <br /> Jurusan Teknik Informatika
            </h1>
            <p>
              Pendidikan Unggul, Berdampak Nyata bagi Peradaban. Selamat datang di HIMASANTIKA.
            </p>
            <div className="hero-buttons">
              <a className="btn-primary" href="#About">Tentang Kami</a>
              <a className="btn-outline" href="#program-kerja">Program Kerja</a>
            </div>
          </div>
        </section>

        <About />
        <ProgramKerja />
        <Galeri />
        <Keanggotaan />
        <Divisi />
        <Kontak />

        <Footer />
      </div>
    </>
  );
}

export default Home;