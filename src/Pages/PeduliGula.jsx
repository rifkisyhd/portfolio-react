import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../components/Project"; // pastikan projects diexport

const currentIndex = projects.findIndex((p) => p.slug === "kostio");

const PeduliGula = () => (
  <div style={{ fontFamily: "'Poppins', sans-serif" }}>
    <Navbar />
    <NavigationProject projects={projects} currentIndex={currentIndex} />
    <Footer />
  </div>
);

export default PeduliGula;