import React from "react";

const WireframeKostio = () => (
  <section id="wireframe" className="my-12">
    <h2 className="text-3xl font-semibold mb-6 text-center text-orange-500">Wireframe Kost.io</h2>
    <div className="flex flex-col items-center">
      <a href="image/wireframe.svg" target="_blank" rel="noopener noreferrer">
        <img
          src="image/wireframe.svg"
          alt="Wireframe Kost.io"
          className="mx-auto w-full md:w-2/4 hover:scale-105 transition-transform duration-300"
        />
      </a>
      <p className="mt-4 text-center text-gray-700">
        Klik gambar untuk melihat wireframe dalam ukuran penuh.
      </p>
    </div>
  </section>
);

export default WireframeKostio;