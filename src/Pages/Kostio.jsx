import React from "react";
import Navbar from "../components/Navbar";
import HeroKostio from "../components/HeroKostio";
import FiturKostio from "../components/FiturKostio";
import UserResearchKostio from "../components/UserResearchKostio";
import FlowchartKostio from "../components/FlowchartKostio";
import WireframeKostio from "../components/WireframeKostio";
import UserflowKostio from "../components/UserflowKostio";
import NavigationProject from "../components/NavigationProject";
import Footer from "../components/Footer";
import { projects } from "../components/Project"; // pastikan projects diexport

const currentIndex = projects.findIndex((p) => p.slug === "kostio");

const Kostio = () => (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Navbar />
        <HeroKostio />
        <FiturKostio />
        <UserResearchKostio />
        <FlowchartKostio />
        <WireframeKostio />
        <UserflowKostio />
        <NavigationProject projects={projects} currentIndex={currentIndex} />
        <Footer />
    </div>
);

export default Kostio;
