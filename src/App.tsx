import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./index.css";
import PreLoader from "./components/Preloader/Preloader";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import RouteScroll from "./components/RouteScroll";
import Domov from "./components/Domov/Domov";
const Storitve = lazy(() => import("./routes/Storitve"));
const Akt_projekti = lazy(() => import("./routes/Akt_projekti"));
const O_podjetju = lazy(() => import("./routes/O_podjetju"));
const Reference = lazy(() => import("./routes/Reference"));
const Kontakt = lazy(() => import("./routes/Kontakt"));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouteScroll />
      <PreLoader />
      <div className="App">
        <NavBar />
        <main id="main-content" tabIndex={-1}>
          <Suspense fallback={<div className="page-loading" role="status">Nalaganje strani …</div>}>
            <Routes>
              <Route path="/" element={<Domov />} />
              <Route path="/storitve" element={<Storitve />} />
              <Route path="/reference" element={<Reference />} />
              <Route path="/akt_projekti" element={<Akt_projekti />} />
              <Route path="/o_podjetju" element={<O_podjetju />} />
              <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
