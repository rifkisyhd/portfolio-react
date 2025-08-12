import React from "react";
import Navbar from "../components/Navbar";
import HeroLP from "../components/HeroLP";
import FiturLP from "../components/FiturLP";
import UserResearchLP from "../components/UserResearchLP";
import UserflowLP from "../components/UserFlowLP";
import NavigationProject from "../components/NavigationProject";
import Footer from "../components/Footer";
import { projects } from "../components/Project"; // pastikan projects diexport

const currentIndex = projects.findIndex((p) => p.slug === "kostio");

const PortoLP = () => (
  <div style={{ fontFamily: "'Poppins', sans-serif" }}>
    <Navbar />
    <HeroLP />
    <FiturLP />
    <UserResearchLP />
    <UserflowLP />
    <NavigationProject projects={projects} currentIndex={currentIndex} />
    <Footer />
  </div>
);

export default PortoLP;