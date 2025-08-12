import React from "react";

const UserflowKostio = () => (
  <section id="mockup">
    <h2 className="text-3xl font-semibold my-4 text-center text-orange-500 mt-12">Mockup</h2>
    <div className="flex flex-col items-start">
      <a href="image/detail-kost.png" target="_blank" rel="noopener noreferrer">
        <img src="image/detail-kost.png" alt="Mockup Kostio" className="mx-auto w-full md:w-2/4 hover:scale-150 transition-transform duration-300" />
      </a>
      <a className="text-orange-600 underline mb-10" href="https://www.figma.com/file/yourfigmalink">
        Detail Mockup
      </a>
    </div>
  </section>
);

export default UserflowKostio;