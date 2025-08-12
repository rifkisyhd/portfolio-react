import React from "react";

const About = () => (
  <section id="tentang" className="mb-8 bg-gray-100 mx-auto p-4 mt-8">
    <div className="container mx-auto text-gray-800">
      <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4">
        Tentang Saya
      </h2>
      <p className="text-base text-center bg-white p-4 rounded-lg shadow-md">
        "Halo! Perkenalkan, namaku Muhammad Rifki Syahada. Aku adalah seseorang yang antusias dalam menjelajahi dunia dan belajar hal-hal baru. Saya percaya bahwa setiap pengalaman memberikan pelajaran berharga dan peluang untuk tumbuh. Sebagai individu yang kreatif dan penuh semangat, saya senang mengeksplorasi berbagai bidang seperti seni, teknologi, dan penulisan. Saya selalu terbuka untuk tantangan baru dan bersemangat untuk berkolaborasi dengan orang-orang yang berbagi minat dan visi yang sama. Mari kita menjalin hubungan dan bersama-sama menciptakan perubahan positif dalam dunia ini.
      </p>
    </div>
    <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4 mt-10">
      Skill
    </h2>
    <div className="flex justify-center text-orange-500 bg-white rounded-lg shadow-md p-4">
      {[
        "fa-figma",
        "fa-html5",
        "fa-css3-alt",
        "fa-js",
        "fa-wordpress",
        "fa-react",
      ].map((icon, idx) => (
        <div className="mx-5" key={icon}>
          <i className={`fa-brands ${icon} fa-3x`}></i>
        </div>
      ))}
    </div>
    <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4 mt-10">
      Sertifikat
    </h2>
    <div className="mx-auto flex flex-col gap-8">
      {[
        {
          img: "assets/image/sertif-gdsc.jpg",
          title: "Google Developer Student Clubs",
          desc: "Sertifikat partisipasi dalam kegiatan GDSC.",
        },
        {
          img: "assets/image/sertif-myskill.jpg",
          title: "My Skill",
          desc: "Sertifikat partisipasi dalam class UI/UX Research & Design.",
        },
        {
          img: "assets/image/sertif-gamatechno.jpg",
          title: "Gamatechno",
          desc: "Sertifikat partisipasi dalam class Web Developer.",
        },
        {
          img: "assets/image/sertif-hacktiv.jpg",
          title: "Hacktiv8",
          desc: "Sertifikat partisipasi dalam studi independen MSIB batch 7 React JS for Frontend Website Developer.",
        },
        {
          img: "assets/image/sertif-dasarui.jpg",
          title: "Udemy",
          desc: "Sertifikat partisipasi dalam class dasar-dasar user interface (UI).",
        },
      ].map((sertif, idx) => (
        <div key={idx} className="flex flex-row gap-4 justify-center items-center bg-white p-4 rounded-lg shadow-md">
          <img src={sertif.img} alt={sertif.title} className="w-2/5 h-auto rounded-lg hover:scale-125 transition duration-300" />
          <div className="flex flex-col text-start max-w-80">
            <h2 className="text-xl font-semibold">{sertif.title}</h2>
            <p className="text-base">{sertif.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About;