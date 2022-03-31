import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Create from "./pages/Create";
import Search from "./pages/Search";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cards/:id" element={<Card />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
