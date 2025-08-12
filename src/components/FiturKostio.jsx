import React from "react";

const fiturList = [
  {
    icon: "fa-search",
    title: "Pencarian Cepat",
    desc: "Fitur pencarian kos dengan filter lokasi, harga, dan fasilitas.",
  },
  {
    icon: "fa-info-circle",
    title: "Info Lengkap",
    desc: "Setiap kos dilengkapi detail harga, fasilitas, dan foto.",
  },
  {
    icon: "fa-star",
    title: "Ulasan Terpercaya",
    desc: "Pengguna bisa melihat review dan rating dari penghuni lain.",
  },
  {
    icon: "fa-map-marker-alt",
    title: "Lokasi Akurat",
    desc: "Tersedia peta lokasi kos untuk memudahkan akses.",
  }
];

const FiturKostio = () => (
  <section id="fitur">
    <h2 className="text-3xl font-semibold mb-8 text-center text-orange-500">Fitur Utama Kost.io</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {fiturList.map((f, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <i className={`fas ${f.icon} text-orange-500 text-3xl mb-4`}></i>
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FiturKostio;