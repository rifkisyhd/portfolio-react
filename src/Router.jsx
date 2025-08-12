import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PortoLP from "./Pages/PortoLP";
import Kostio from "./Pages/Kostio";
import PeduliGula from "./Pages/PeduliGula"; 

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/kostio" element={<Kostio />} />
                <Route path="/peduli-gula" element={<PeduliGula />} />
                <Route path="/portolp" element={<PortoLP />} />
                {/* Tambahkan route lain sesuai kebutuhan */}
            </Routes>
        </BrowserRouter>
    );
}
