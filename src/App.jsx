import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    useEffect(() => {
        const originalTitle = document.title;
        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "Jangan Lupa Kembali 😁";
            } else {
                document.title = originalTitle;
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
        };
    }, []);

    return (
        <div className="bg-gray-100 text-gray-800">
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
