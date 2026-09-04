import '../styles/Legal.css';

const legalContent = {
  privacy: {
    label: 'Privacy Policy',
    intro: 'Kebijakan privasi ini menjelaskan bagaimana HIMASANTIKA Universitas Muhammadiyah Cirebon mengumpulkan, menggunakan, dan melindungi data pribadi pengunjung serta pengguna layanan digital kami.',
    sections: [
      {
        title: '1. Informasi yang Kami Kumpulkan',
        body: 'Kami dapat mengumpulkan data dasar seperti nama, alamat email, nomor telepon, serta informasi yang Anda kirimkan melalui form kontak, formulir pendaftaran, atau aktivitas interaksi di website ini. Kami juga dapat mencatat data teknis seperti alamat IP, browser, perangkat, dan aktivitas navigasi untuk keperluan keamanan dan analisis penggunaan.'
      },
      {
        title: '2. Penggunaan Informasi',
        body: 'Informasi yang kami kumpulkan digunakan untuk membalas pesan, memproses komunikasi, meningkatkan pelayanan organisasi, menjaga keamanan website, dan menyampaikan informasi terkait kegiatan HIMASANTIKA secara relevan.'
      },
      {
        title: '3. Keamanan Data',
        body: 'Kami berupaya menjaga keamanan data dengan langkah teknis dan administratif yang sesuai. Namun, tidak ada sistem digital yang sepenuhnya aman 100%, sehingga kami mendorong pengguna untuk berhati-hati dalam membagikan informasi sensitif.'
      },
      {
        title: '4. Cookie dan Analitik',
        body: 'Website ini dapat menggunakan teknologi seperti cookie untuk meningkatkan pengalaman pengguna dan memahami pola penggunaan situs. Anda dapat mengatur browser untuk menolak cookie sesuai kebutuhan.'
      },
      {
        title: '5. Pembagian Data',
        body: 'Kami tidak menjual atau menyewakan data pribadi pengguna kepada pihak ketiga. Informasi hanya akan dibagikan apabila diperlukan untuk keperluan operasional, keamanan, atau sesuai ketentuan hukum yang berlaku.'
      },
      {
        title: '6. Hak Pengguna',
        body: 'Pengguna berhak meminta akses, koreksi, atau penghapusan data pribadi yang terkait dengan akun atau komunikasi mereka, dengan syarat sesuai kepentingan dan ketentuan hukum yang berlaku.'
      },
      {
        title: '7. Perubahan Kebijakan',
        body: 'Kebijakan privasi ini dapat diperbarui dari waktu ke waktu untuk menyesuaikan kebutuhan organisasi atau perubahan regulasi. Perubahan akan diinformasikan melalui halaman website ini.'
      }
    ]
  },
  terms: {
    label: 'Terms of Service',
    intro: 'Syarat dan ketentuan ini mengatur penggunaan website HIMASANTIKA Universitas Muhammadiyah Cirebon. Dengan mengakses atau menggunakan website ini, Anda dianggap telah membaca dan menyetujui seluruh ketentuan berikut.',
    sections: [
      {
        title: '1. Penggunaan Website',
        body: 'Website ini disediakan untuk tujuan informasi, komunikasi, promosi kegiatan, dan pengembangan organisasi HIMASANTIKA. Pengguna dilarang menggunakan situs ini untuk aktivitas yang merugikan, melanggar hukum, atau mengganggu operasional website.'
      },
      {
        title: '2. Konten dan Informasi',
        body: 'Semua konten yang tersedia di website, termasuk teks, gambar, logo, dan materi kegiatan, bertujuan untuk keperluan informasi dan promosi. Pengguna tidak diperbolehkan menyalin, mendistribusikan, atau menggunakan konten tanpa izin yang jelas dari pihak organisasi.'
      },
      {
        title: '3. Komunikasi dan Form Kontak',
        body: 'Form kontak yang tersedia dapat digunakan untuk mengirim pertanyaan, saran, atau aspirasi. Kami berhak menanggapi sesuai kebutuhan dan membatasi komunikasi yang dianggap spam, tidak relevan, atau melanggar ketentuan yang berlaku.'
      },
      {
        title: '4. Batasan Tanggung Jawab',
        body: 'HIMASANTIKA berusaha menyajikan informasi yang akurat dan terkini, namun tidak menjamin keakuratan, kelengkapan, atau keterbaruan data sepenuhnya. Kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan informasi di website ini.'
      },
      {
        title: '5. Perubahan Layanan',
        body: 'Kami berhak memperbarui, menyesuaikan, atau menghentikan sebagian fitur website tanpa pemberitahuan terlebih dahulu demi menjaga kualitas layanan dan keamanan platform.'
      },
      {
        title: '6. Hukum yang Berlaku',
        body: 'Ketentuan ini diatur sesuai hukum yang berlaku di Indonesia. Setiap sengketa yang timbul terkait penggunaan website ini akan diselesaikan secara musyawarah dan, apabila diperlukan, melalui jalur hukum yang berlaku.'
      }
    ]
  }
};

const LegalPage = ({ type = 'privacy' }) => {
  const page = legalContent[type] ?? legalContent.privacy;

  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <div className="legal-card">
          <div className="legal-header">
            <span className="legal-badge">HIMASANTIKA</span>
            <h1>{page.label}</h1>
            <p>{page.intro}</p>
          </div>

          <div className="legal-body">
            {page.sections.map((section) => (
              <section key={section.title} className="legal-section">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <div className="legal-actions">
            <button type="button" onClick={handleBack} className="legal-back-btn">
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalPage;
