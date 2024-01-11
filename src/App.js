import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import PreLoader from "./components/Preloader/Preloader";
import Domov from "./components/Domov/Domov";
import Storitve from "./routes/Storitve";
import Akt_projekti from "./routes/Akt_projekti";
import O_podjetju from "./routes/O_podjetju";
import Reference from "./routes/Reference";
import Kontakt from "./routes/Kontakt";

export default function App() {
  return (
    <>
      <PreLoader />
      <div className="App">
        <Routes>
          <Route path="/" element={<Domov />} />
          <Route path="/storitve" element={<Storitve />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/akt_projekti" element={<Akt_projekti />} />
          <Route path="/o_podjetju" element={<O_podjetju />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </>
  );
}
