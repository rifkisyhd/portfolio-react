import React from "react";

const HeroKostio = () => (
  <section className="p-4 bg-gray-100 min-h-screen">
    <div className="container mx-auto text-gray-800 mt-24 md:mt-40"></div>
    <div className="flex flex-col gap-x-2.5 md:flex-row items-center justify-between mb-12">
      <div className="md:w-1/2">
        <img src="image/thumnail-kos.png" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300" alt="Kost.io App" />
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center md:text-left">
          Kost.io <span className="text-orange-500">App</span>
        </h1>
        <p className="text-base md:text-lg mb-6 text-center md:text-left">
          Aplikasi pencarian kos kosan yang membantu pengguna menemukan tempat tinggal ideal secara praktis. Fitur canggih, info lengkap, dan ulasan terpercaya membuat pengalaman mencari kos jadi mudah dan efisien.
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#fitur" className="bg-orange-500 text-white px-12 py-3 rounded-full hover:bg-orange-600 transition duration-300">Lihat Fitur</a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroKostio;