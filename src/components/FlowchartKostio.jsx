import React from "react";

const FlowchartKostio = () => (
  <section id="flowchart" className="my-12">
    <h2 className="text-3xl font-semibold mb-6 text-center text-orange-500">Flowchart</h2>
    <div className="flex flex-col items-center">
      <a href="image/FLOWCHART.svg" target="_blank" rel="noopener noreferrer">
        <img
          src="image/FLOWCHART.svg"
          alt="Flowchart Kost.io"
          className="mx-auto w-full md:w-2/4 hover:scale-105 transition-transform duration-300"
        />
      </a>
      <p className="mt-4 text-center text-gray-700">
        Klik gambar untuk melihat flowchart dalam ukuran penuh.
      </p>
    </div>
  </section>
);

export default FlowchartKostio;