import React from "react";
import { Link } from "react-router-dom";

export const projects = [
    {
        img: "image/kost-io.png",
        title: "Kost.io App",
        desc: "Aplikasi ini menampilkan solusi inovatif yang memudahkan ribuan pengguna dalam mencari tempat tinggal yang nyaman. Dengan fitur pencarian canggih, informasi lengkap, dan ulasan terpercaya, kami memberikan pengalaman pencarian yang praktis dan efisien. Bergabunglah dengan kami dan temukan kos kosan idealmu dengan mudah melalui aplikasi pencari kos kosan terbaik di pasaran.",
        slug: "kostio",
    },
    {
        img: "image/peduli-gula.png",
        title: "Peduli Gula App",
        desc: "Aplikasi ini menyediakan solusi inovatif untuk membantu pengguna dalam mengontrol kondisi diabetes mereka. Dengan fitur-fitur canggih seperti pelacakan gula darah, pengingat obat, dan pemantauan pola makan, aplikasi ini memudahkan pengguna dalam menjaga kesehatan sehari-hari. Dalam portofolio kami, kami menunjukkan komitmen kami untuk memberikan pengalaman terbaik dalam mengelola diabetes. Bergabunglah dengan kami dan temukan cara yang lebih mudah untuk hidup sehat melalui aplikasi pengelolaan diabetes kami yang unggul.",
        slug: "peduli-gula",
    },
    {
        img: "image/landingpage-uprint.png",
        title: "Landing Page",
        desc: "Website ini adalah redesign landing page Uprint bertujuan menyederhanakan navigasi, memperkuat visual branding, dan meningkatkan pengalaman pengguna untuk memudahkan pelanggan dalam memesan layanan cetak digital.",
        slug: "portolp",
    },
];

const Project = () => (
    <section id="project" className="mb-8 bg-gray-100 mx-auto p-4 mt-8">
        <div className="container mx-auto text-gray-800">
            <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4">
                Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((p, idx) => (
                    <div
                        className="bg-white p-4 rounded-lg shadow-md"
                        key={idx}>
                        <img
                            src={p.img}
                            alt={p.title}
                            className="h-80 w-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">
                            {p.title}
                        </h3>
                        <p className="text-base mb-4">{p.desc}</p>
                        <button className="rounded bg-orange-500 text-white px-4 py-2 hover:bg-orange-400">
                            <Link to={`/${p.slug}`}>Selengkapnya</Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Project;
