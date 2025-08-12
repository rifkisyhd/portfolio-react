import React from "react";

const UserResearchKostio = () => (
  <section id="user-research">
    <h2 className="text-3xl font-semibold mb-6 text-center text-orange-500">Ringkasan User Research</h2>
    <div className="p-6 rounded-lg bg-white shadow-md mb-12">
      <p className="text-base md:text-lg mb-4">
        User research dilakukan dengan wawancara kepada pengguna kos dan pemilik usaha kos untuk mengetahui kebutuhan utama, kendala, serta fitur yang paling diinginkan dalam aplikasi pencarian kos kosan.
      </p>
      <a className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300" href="">
        Lihat Detail Hasil Survey
      </a>
    </div>
  </section>
);

export default UserResearchKostio;