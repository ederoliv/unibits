import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-[#0B0B0B] text-white font-['Inter',system-ui,sans-serif] w-full min-h-screen flex flex-col">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/jogo/:id" element={<GamePage />} />
             <Route path="/privacidade" element={<PrivacyPolicyPage />} />
           </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}