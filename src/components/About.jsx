import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const About = () => {
    const [sertifikat, setSertifikat] = useState([]);

    useEffect(() => {
        async function fetchSertifikat() {
            const { data, error } = await supabase
                .from("sertifikat")
                .select("*");
            if (!error) setSertifikat(data);
        }
        fetchSertifikat();
    }, []);

    return (
        <section id="tentang" className="mb-8 bg-gray-100 mx-auto p-4 mt-8">
            <div className="container mx-auto text-gray-800">
                <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4">
                    Tentang Saya
                </h2>
                <p className="text-base text-center bg-white p-4 rounded-lg shadow-md">
                    "Halo! Perkenalkan, namaku Muhammad Rifki Syahada. Aku
                    adalah seseorang yang antusias dalam menjelajahi dunia dan
                    belajar hal-hal baru. Saya percaya bahwa setiap pengalaman
                    memberikan pelajaran berharga dan peluang untuk tumbuh.
                    Sebagai individu yang kreatif dan penuh semangat, saya
                    senang mengeksplorasi berbagai bidang seperti seni,
                    teknologi, dan penulisan. Saya selalu terbuka untuk
                    tantangan baru dan bersemangat untuk berkolaborasi dengan
                    orang-orang yang berbagi minat dan visi yang sama. Mari kita
                    menjalin hubungan dan bersama-sama menciptakan perubahan
                    positif dalam dunia ini.
                </p>
            </div>
            <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4 mt-10">
                Skill
            </h2>
            <div className="flex flex-wrap justify-center text-orange-500 bg-white rounded-lg shadow-md p-4 gap-6">
                {[
                    "fa-figma",
                    "fa-html5",
                    "fa-css3-alt",
                    "fa-js",
                    "fa-wordpress",
                    "fa-react",
                ].map((icon, idx) => (
                    <div
                        className="mx-2 my-2 flex justify-center items-center"
                        key={icon}>
                        <i className={`fa-brands ${icon} fa-3x`}></i>
                    </div>
                ))}
            </div>
            <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4 mt-10">
                Sertifikat
            </h2>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {sertifikat.map((sertif, idx) => (
                    <div
                        key={idx}
                        className="flex flex-row gap-4 justify-center items-center bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={sertif.image_url}
                            alt={sertif.title}
                            className="w-2/5 h-auto rounded-lg hover:scale-150 transition duration-300 cursor-pointer"
                            onClick={() =>
                                window.open(sertif.image_url, "_blank")
                            }
                        />
                        <div className="flex flex-col text-start max-w-80">
                            <h2 className="text-xl font-bold">
                                {sertif.title}
                            </h2>
                            <p className="text-base">{sertif.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
