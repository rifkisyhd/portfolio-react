import React from "react";

const Contact = () => (
  <section id="kontak" className="bg-[#101036] py-8 h-80 flex items-center justify-center">
    <div className="container mx-auto text-white text-center">
      <h2 className="text-3xl font-semibold mb-8">Mari Terhubung</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/rifki-syahada/" className="text-white hover:text-orange-500 transition-colors duration-300">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/rifkisyhd" className="text-white hover:text-orange-500 transition-colors duration-300">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://instagram.com/rifkisyhd_" className="text-white hover:text-orange-500 transition-colors duration-300">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;