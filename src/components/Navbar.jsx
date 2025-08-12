import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const sectionIds = [
    "fitur",
    "wireframe",
    "mockup",
    "user-research",
    "userflow",
    "tentang",
    "kontak",
    "project",
];

const menuConfig = {
    "/": [
        { href: "#tentang", label: "Tentang Saya" },
        { href: "#kontak", label: "Kontak" },
        { href: "#project", label: "Project" },
    ],
    "/portolp": [
        { href: "#fitur", label: "Fitur" },
        { href: "#user-research", label: "User Research" },
        { href: "#userflow", label: "User Flow" },
        { href: "#wireframe", label: "Wireframe" },
        { href: "#flowchart", label: "Flowchart" },
        { href: "#mockup", label: "Mockup" },
    ],
    "/kostio": [
        { href: "#fitur", label: "Fitur" },
        { href: "#user-research", label: "User Research" },
        { href: "#userflow", label: "User Flow" },
        { href: "#flowchart", label: "Flowchart" },
        { href: "#wireframe", label: "Wireframe" },
        { href: "#mockup", label: "Mockup" },
    ],
    // Tambahkan path lain sesuai kebutuhan
};

const NavbarProject = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeMenus, setActiveMenus] = useState(
        menuConfig[location.pathname] || [],
    );

    useEffect(() => {
        const filtered = (menuConfig[location.pathname] || []).filter(
            (item) => {
                const id = item.href.replace("#", "");
                return document.getElementById(id) !== null;
            },
        );
        setActiveMenus(filtered);
    }, [location.pathname]);

    return (
        <nav className="bg-[#101036] shadow fixed top-0 z-10 w-full h-20 flex items-center">
            <div className="container mx-auto p-4 flex justify-between items-center text-white">
                <button
                    onClick={() => navigate("/")}
                    className="text-2xl font-bold italic focus:outline-none">
                    Rifki<span className="text-orange-500">syhd</span>
                </button>
                <button
                    id="menu-toggle"
                    className="block md:hidden text-white focus:outline-none"
                    onClick={() => {
                        const menu = document.getElementById("menu");
                        menu.classList.toggle("hidden");
                    }}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul
                    id="menu"
                    className="hidden md:flex md:space-x-4 flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#101036] md:bg-transparent md:justify-end">
                    {activeMenus.map((item, idx) => (
                        <li className="py-2 md:py-0" key={idx}>
                            <a
                                href={item.href}
                                className="block text-base text-white px-4 md:px-0">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavbarProject;
