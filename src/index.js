import React, { useEffect } from 'react';
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Adaptacije from './images/adaptacije.jpg';
import Akt_projekti_img from './images/akt_projekti.jpg';
import Devana from './images/devana.jpg';
import En_sanacije from './images/en_sanacije.jpg';
import Intercontinental from './images/intercontinental.jpg';
import Kvartet_siska from './images/kvartet_siska.jpg';
import Logo from './images/logo_pisan.png';
import Murgle from './images/murgle.jpeg';
import Suhomontažna_dela from './images/o_podjetju.png';
import Planica from './images/planica.jpg';
import Dvojcek from './images/slika1.png';
import Storitve_img from './images/storitve.jpeg';
import Tem_catez from './images/tem_catez.jpg';
import Dvojcek1 from './images/ums_house.jpg';
import Yaskawa from './images/yaskawa.jpg';
import Dvojcek_zunaj from './images/zunanja_ureditev.jpeg';

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
      Adaptacije,
      Akt_projekti_img,
      Devana,
      En_sanacije,
      Intercontinental,
      Kvartet_siska,
      Logo,
      Murgle,
      Suhomontažna_dela,
      Planica,
      Dvojcek,
      Storitve_img,
      Tem_catez,
      Dvojcek1,
      Yaskawa,
      Dvojcek_zunaj,
      // Tukaj dodaj slike za preload
    ];

    imagesToPreload.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, [])};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export {
  Adaptacije,
  Akt_projekti_img,
  Devana,
  En_sanacije,
  Intercontinental,
  Kvartet_siska,
  Logo,
  Murgle,
  Suhomontažna_dela,
  Planica,
  Dvojcek,
  Storitve_img,
  Tem_catez,
  Dvojcek1,
  Yaskawa,
  Dvojcek_zunaj
};

root.render(
  <BrowserRouter >
    <PreloadImages />
    <App />
  </BrowserRouter>
);
