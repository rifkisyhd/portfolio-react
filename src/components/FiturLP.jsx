import React from "react";

const fiturList = [
  {
    icon: "fa-print",
    title: "Cetak Digital",
    desc: "Menawarkan teknologi cetak digital terbaru untuk hasil cetak yang tajam dan detail.",
  },
  {
    icon: "fa-palette",
    title: "Warna yang Luas",
    desc: "Menawarkan berbagai pilihan warna untuk menciptakan hasil cetak yang sesuai dengan kebutuhan Anda.",
  },
  {
    icon: "fa-calculator",
    title: "Harga yang Kompetitif",
    desc: "Menawarkan harga yang kompetitif untuk berbagai jenis cetakan, sehingga Anda dapat mencetak dengan biaya yang efektif.",
  },
  {
    icon: "fa-user",
    title: "Dukungan Pelanggan",
    desc: "Tim dukungan pelanggan yang siap membantu Anda dalam setiap tahap proses cetak.",
  }
];

const FiturLP = () => (
  <section id="fitur">
    <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Fitur Utama</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {fiturList.map((f, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <i className={`fas ${f.icon} text-blue-700 text-3xl mb-4`}></i>
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FiturLP;