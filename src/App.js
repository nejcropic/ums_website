import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./index.css";
import NavBar from './components/Navbar';
import PreLoader from './components/Preloader';
import HomeBody from './components/HomeBody';
import Storitve from './routes/Storitve';
import Akt_projekti from './routes/Akt_projekti';
import O_podjetju from './routes/O_podjetju';
import Reference from './routes/Reference';

export default function App() {
  
  return (
    <>
    {/*<PreLoader />*/}
    <div className="App">
      <Routes >
        <Route path="/" element={<HomeBody />} />
        <Route path="/storitve" element={<Storitve />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/akt_projekti" element={<Akt_projekti />} />
        <Route path="/o_podjetju" element={<O_podjetju />} />
      </Routes>
     <NavBar /> 
    </div>
    </>
  );
}

