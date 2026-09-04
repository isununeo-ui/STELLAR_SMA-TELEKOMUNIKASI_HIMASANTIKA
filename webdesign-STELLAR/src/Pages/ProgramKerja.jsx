
import { useState } from 'react';
import { FaCodeBranch, FaGlobeAsia, FaLaptopCode, FaTimes, FaUsers } from 'react-icons/fa';
import '../styles/ProgramKerja.css';

const ProgramKerja = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Data program kerja dipisahkan dari markup agar mudah ditambah atau diubah.
  const programs = [
    {
      id: 1,
      title: "Teknologi untuk Desa",
      subtitle: "Kolaborasi Resmi UMC 2026",
      description: "HIMASANTIKA bersama HMTI UMC dan sembilan kampus Muhammadiyah 'Aisyiyah menjalankan kolaborasi Teknologi untuk Desa. Kegiatan ini tercatat dalam publikasi resmi Universitas Muhammadiyah Cirebon pada 12 April 2026.",
      icon: FaGlobeAsia
    },
    {
      id: 2,
      title: "Pembinaan & Kaderisasi",
      subtitle: "Agenda Organisasi",
      description: "HIMASANTIKA menempatkan pembinaan, penguatan kapasitas, dan pengembangan kader sebagai fondasi utama dalam membangun mahasiswa Teknik Informatika yang siap berkontribusi.",
      icon: FaUsers
    },
    {
      id: 3,
      title: "Kolaborasi & Komunitas",
      subtitle: "Sinergi Internal dan Eksternal",
      description: "Program kerja organisasi juga diarahkan pada kolaborasi, pengembangan komunitas, dan sinergi antar mahasiswa serta mitra kampus untuk memperluas dampak positif HIMASANTIKA.",
      icon: FaLaptopCode
    }
  ];

  return (
    <section id="program-kerja" className="proker-section">
      <div className="section-icon-cloud proker-icon-cloud" aria-hidden="true">
        <FaCodeBranch />
        <FaLaptopCode />
        <FaGlobeAsia />
      </div>
      {/* Header memberi konteks sebelum daftar program ditampilkan. */}
      <div className="proker-header">
        <div className="section-kicker">AGENDA HIMASANTIKA</div>
        <h2>Program Kerja <span className="highlight-text">Unggulan</span></h2>
        <p>Inisiatif dan kegiatan utama yang dijalankan oleh HIMASANTIKA untuk mahasiswa dan masyarakat.</p>
        <div className="header-line"></div>
      </div>

      {/* Setiap item data dirender menjadi satu kartu program. */}
      <div className="proker-grid">
        {programs.map((program) => (
          <button className="proker-card" key={program.id} type="button" onClick={() => setSelectedProgram(program)} aria-label={`Lihat detail ${program.title}`}>
            <div className="proker-card-top">
              <span className="program-number">0{program.id}</span>
              <div className="proker-icon"><program.icon aria-hidden="true" /></div>
            </div>
            <div className="proker-content">
              <h3>{program.title}</h3>
              <h4>{program.subtitle}</h4>
              <p>{program.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedProgram && (
        <div className="proker-modal-backdrop" onClick={() => setSelectedProgram(null)}>
          <div className="proker-modal" role="dialog" aria-modal="true" aria-labelledby="proker-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="proker-modal-close" type="button" onClick={() => setSelectedProgram(null)} aria-label="Tutup detail program">
              <FaTimes aria-hidden="true" />
            </button>
            <span className="proker-modal-number">PROGRAM 0{selectedProgram.id}</span>
            <div className="proker-modal-icon"><selectedProgram.icon aria-hidden="true" /></div>
            <h3 id="proker-modal-title">{selectedProgram.title}</h3>
            <h4>{selectedProgram.subtitle}</h4>
            <p>{selectedProgram.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProgramKerja;