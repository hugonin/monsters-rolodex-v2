import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Create from "./pages/Create";
import Search from "./pages/Search";

export default function App() {
  const { mode } = useTheme();

  return (
    <div className={`flex flex-col justify-between min-h-full ${mode} bg-base`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/monsters/:id" element={<Card />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
