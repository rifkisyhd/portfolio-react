import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectDetail from "./components/ProjectDetail";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:slug" element={<ProjectDetail />} />
                {/* Tambahkan route lain sesuai kebutuhan */}
            </Routes>
        </BrowserRouter>
    );
}
