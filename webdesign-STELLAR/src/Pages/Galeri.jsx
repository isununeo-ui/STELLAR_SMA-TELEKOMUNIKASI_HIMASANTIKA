
import { useState } from 'react';
import { FaArrowRight, FaCamera, FaImages, FaTimes } from 'react-icons/fa';
import '../styles/Galeri.css';
import bukber from '../assets/Bukber dan Family Gathering .jpg';
import bukberFamily from '../assets/Bukber dan Family Gathering_.jpg';
import kajianPublicSpeaking from '../assets/Kajian Public Speaking HIMASANTIKA 2025.jpg';
import mengenalOrganisasi from '../assets/Mengenal Organisasi Teknik Informatika 2025.jpg';
import studiBanding from '../assets/Studi Banding HIMASANTIKA UMC X HIMA-TI UNIKU(1).jpg';

function Galeri() {
  // Menyimpan kegiatan yang sedang dipilih untuk ditampilkan di modal detail.
  const [selectedItem, setSelectedItem] = useState(null);

  // Data gambar membentuk grid asimetris pada section galeri.
  const galleryData = [
    // Perhatikan properti 'size'. Ini yang akan membuat bentuknya asimetris dan keren!
    { id: 1, image: bukber, title: 'Bukber & Family Gathering', description: 'Momen kebersamaan untuk mempererat silaturahmi dan rasa kekeluargaan antaranggota HIMASANTIKA.', size: 'large' },
    { id: 2, image: kajianPublicSpeaking, title: 'Kajian Public Speaking', description: 'Kegiatan pengembangan kemampuan komunikasi dan kepercayaan diri mahasiswa.', size: 'tall' },
    { id: 3, image: mengenalOrganisasi, title: 'Mengenal Organisasi Teknik Informatika', description: 'Ruang berbagi wawasan tentang organisasi dan perjalanan mahasiswa Teknik Informatika.', size: 'wide' },
    { id: 4, image: studiBanding, title: 'Studi Banding HIMASANTIKA x HIMA-TI UNIKU', description: 'Pertukaran pengalaman dan inspirasi bersama organisasi mahasiswa dari kampus lain.', size: 'normal' },
    { id: 5, image: bukberFamily, title: 'Kebersamaan HIMASANTIKA', description: 'Dokumentasi keakraban anggota dalam membangun organisasi yang solid dan hangat.', size: 'normal' },
  ];

  return (
    <section id="galeri" className="galeri-section">
      <div className="section-icon-cloud galeri-icon-cloud" aria-hidden="true">
        <FaCamera />
        <FaImages />
      </div>
      <div className="galeri-header">
        <h2>Momen <span>HIMASANTIKA</span></h2>
        <p>Jejak langkah dan cerita di balik setiap program kerja kami.</p>
      </div>

      {/* Grid menampilkan gambar dengan ukuran kartu yang bervariasi. */}
      <div className="bento-grid">
        {galleryData.map((item) => (
          <button key={item.id} type="button" className={`bento-card ${item.size}`} onClick={() => setSelectedItem(item)} aria-label={`Lihat detail ${item.title}`}>
            <img src={item.image} alt={item.title} />
            <div className="bento-overlay">
              <div className="overlay-content">
                <h3>{item.title}</h3>
                <span className="bento-btn">Lihat Detail <FaArrowRight aria-hidden="true" /></span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal menampilkan deskripsi kegiatan yang dipilih. */}
      {selectedItem && (
        <div className="gallery-modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="gallery-modal" role="dialog" aria-modal="true" aria-labelledby="gallery-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="gallery-modal-close" type="button" onClick={() => setSelectedItem(null)} aria-label="Tutup detail kegiatan">
              <FaTimes aria-hidden="true" />
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} />
            <div className="gallery-modal-content">
              <p className="gallery-modal-kicker">MOMEN HIMASANTIKA</p>
              <h3 id="gallery-modal-title">{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Galeri;