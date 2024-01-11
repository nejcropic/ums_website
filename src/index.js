import React, { useEffect } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Adaptacije from "./images/adaptacije.jpg";
import BrdoLj from "./images/brdo_lj.png";
import Devana from "./images/devana.jpg";
import Devana2 from "./images/devana2.png";
import Dvojcek from "./images/dvojcek.png";
import Dvojcek1 from "./images/dvojcek.png";
import Dvojcek_zunaj from "./images/zunanja_ureditev1.jpeg";
import Gradbeni_projekti from "./images/gr_projekti.jpg";
import Intercontinental from "./images/intercontinental.jpg";
import Kvartet_siska from "./images/kvartet_siska.jpg";
import Logo from "./images/logo_bel.png";
import Mansarda from "./images/mansarda.png";
import Murgle from "./images/murgle.jpeg";
import Naslovna from "./images/dvojcek2.png";
import Okolica from "./images/zunanja_ureditev.jpg";
import Planica from "./images/planica.jpg";
import Suhomontažna_dela from "./images/suhomontaza.jpg";
import Storitve_img from "./images/storitve.jpeg";
import Tem_catez from "./images/tem_catez.png";
import Yaskawa from "./images/yaskawa.jpg";

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
      Adaptacije,
      BrdoLj,
      Devana,
      Devana2,
      Dvojcek,
      Dvojcek1,
      Dvojcek_zunaj,
      Gradbeni_projekti,
      Intercontinental,
      Kvartet_siska,
      Logo,
      Mansarda,
      Murgle,
      Okolica,
      Naslovna,
      Suhomontažna_dela,
      Planica,
      Storitve_img,
      Tem_catez,
      Yaskawa,
      // Tukaj dodaj slike za preload
    ];

    imagesToPreload.forEach((imageSrc) => (new Image().src = imageSrc));
  }, []);
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export {
  Adaptacije,
  BrdoLj,
  Devana,
  Devana2,
  Dvojcek,
  Dvojcek1,
  Dvojcek_zunaj,
  Gradbeni_projekti,
  Intercontinental,
  Kvartet_siska,
  Logo,
  Mansarda,
  Murgle,
  Naslovna,
  Okolica,
  Suhomontažna_dela,
  Planica,
  Storitve_img,
  Tem_catez,
  Yaskawa,
};

root.render(
  <BrowserRouter>
    <PreloadImages />
    <App />
  </BrowserRouter>
);
