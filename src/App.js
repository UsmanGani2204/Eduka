import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
import Gallery from "./Homepage/Gallery";
import Enquiry from "./Homepage/Enquiry";
import AboutUs from "./Homepage/AboutUs";
import { useState, createContext } from "react";

export const context = createContext();
function App() {
  const [footerheight, setfooterheight] = useState(0);
  const [locateusheight, setlocateusheight] = useState(0);
  return (
    <context.Provider
      value={{
        fh: footerheight,
        hf: setfooterheight,
        lh: locateusheight,
        hl: setlocateusheight,
      }}
    >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    </context.Provider>
  );
}

export default App;
