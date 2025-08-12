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
        { href: "#project", label: "Project" },
        { href: "#kontak", label: "Kontak" },
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
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const filtered = (menuConfig[location.pathname] || []).filter(
            (item) => {
                const id = item.href.replace("#", "");
                return document.getElementById(id) !== null;
            },
        );
        setActiveMenus(filtered);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            let current = "";
            activeMenus.forEach((item) => {
                const id = item.href.replace("#", "");
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 350 && rect.bottom > 1) {
                        current = id;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeMenus]);

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
                    {activeMenus.map((item, idx) => {
                        const id = item.href.replace("#", "");
                        const isActive = activeSection === id;
                        return (
                            <li
                                className="py-2 md:py-0 flex justify-center items-center"
                                key={idx}>
                                <a
                                    href={item.href}
                                    className={`block text-base px-4 md:px-0 transition-all duration-300 rounded-md
            ${isActive ? "text-orange-500 font-semibold" : "text-white"}
            hover:bg-orange-500 hover:text-white hover:px-6 hover:py-2 text-center`}>
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default NavbarProject;
