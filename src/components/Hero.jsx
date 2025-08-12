import React from "react";

const Hero = () => (
    <section className="bg-[#101036] p-4">
        <div className="container mx-auto text-white min-h-screen flex items-center">
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="text-start px-4 md:px-0">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 italic">
                            Muhammad{" "}
                            <span className="text-orange-500">Rifki</span>{" "}
                            Syahada
                        </h2>
                        <p className="text-sm md:text-base mb-5">
                            Saya Rifki, antusias di bidang UI/UX dan web
                            development, fokus menciptakan pengalaman pengguna
                            yang intuitif dan antarmuka menarik.
                        </p>
                        <div className="flex justify-start space-x-4 my-5">
                            <a
                                href="https://www.linkedin.com/in/rifki-syahada/"
                                className="text-white hover:text-orange-500 transition-colors duration-300">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a
                                href="https://github.com/rifkisyhd"
                                className="text-white hover:text-orange-500 transition-colors duration-300">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                            <a
                                href="https://instagram.com/rifkisyhd_"
                                className="text-white hover:text-orange-500 transition-colors duration-300">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                        </div>
                        <a
                            href="#tentang"
                            className="inline-block rounded bg-orange-500 text-white px-4 py-2 md:py-4 hover:bg-orange-400">
                            Selengkapnya
                        </a>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="image/foto-baru.jpg"
                            alt="Muhammad Rifki Syahada"
                            className="w-3/4 md:w-2/4 h-auto rounded-full shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
