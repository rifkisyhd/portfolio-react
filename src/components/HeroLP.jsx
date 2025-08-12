import React from "react";

const HeroLP = () => (
  <section className="p-4 bg-gray-100 min-h-screen">
    <div className="container mx-auto text-gray-800 mt-24 md:mt-40"></div>
    <div className="flex flex-col gap-x-2.5 md:flex-row items-center justify-between mb-12">
      <div className="md:w-1/2">
        <img src="image/bg-porto-lp.jpg" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300" alt="Landing Page Uprint" />
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center md:text-left">
          Landing Page <span className="text-blue-700">Uprint</span>
        </h1>
        <p className="text-base md:text-lg mb-6 text-center md:text-left">
          Dalam portofolio kami di Uprint Digital Printing, Anda akan menemukan berbagai proyek cetak yang menunjukkan kualitas dan kreativitas kami. Dari brosur yang menarik hingga kemasan yang inovatif, setiap karya dirancang dengan perhatian khusus terhadap detail dan kebutuhan klien.
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#fitur" className="bg-blue-700 text-white px-12 py-3 rounded-full hover:bg-blue-800 transition duration-300">Lihat Fitur</a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroLP;