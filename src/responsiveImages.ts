import intercontinental from "./images/intercontinental.webp";
import intercontinental640 from "./images/responsive/intercontinental-640.webp";
import intercontinental960 from "./images/responsive/intercontinental-960.webp";
import planica from "./images/planica.webp";
import planica640 from "./images/responsive/planica-640.webp";
import planica960 from "./images/responsive/planica-960.webp";
import kvartet_siska from "./images/kvartet_siska.webp";
import kvartet_siska640 from "./images/responsive/kvartet_siska-640.webp";
import kvartet_siska960 from "./images/responsive/kvartet_siska-960.webp";
import mansarda from "./images/mansarda.webp";
import mansarda640 from "./images/responsive/mansarda-640.webp";
import mansarda960 from "./images/responsive/mansarda-960.webp";
import vilharia from "./images/vilharia.webp";
import vilharia640 from "./images/responsive/vilharia-640.webp";
import vilharia960 from "./images/responsive/vilharia-960.webp";
import dvojcek from "./images/dvojcek.webp";
import dvojcek640 from "./images/responsive/dvojcek-640.webp";
import dvojcek960 from "./images/responsive/dvojcek-960.webp";
import zunanja_ureditev from "./images/zunanja_ureditev.webp";
import zunanja_ureditev640 from "./images/responsive/zunanja_ureditev-640.webp";
import zunanja_ureditev960 from "./images/responsive/zunanja_ureditev-960.webp";
import suhomontaza from "./images/suhomontaza.webp";
import suhomontaza640 from "./images/responsive/suhomontaza-640.webp";
import suhomontaza960 from "./images/responsive/suhomontaza-960.webp";

export interface ImageSource {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

export const responsiveImages = {
  intercontinental: {
    src: intercontinental,
    srcSet: `${intercontinental640} 640w, ${intercontinental960} 960w, ${intercontinental} 1619w`,
    width: 1619,
    height: 1080,
  },
  planica: {
    src: planica,
    srcSet: `${planica640} 640w, ${planica960} 960w, ${planica} 1440w`,
    width: 1440,
    height: 1080,
  },
  kvartet_siska: {
    src: kvartet_siska,
    srcSet: `${kvartet_siska640} 640w, ${kvartet_siska960} 960w, ${kvartet_siska} 1920w`,
    width: 1920,
    height: 1020,
  },
  vilharia: {
    src: vilharia,
    srcSet: `${vilharia640} 640w, ${vilharia960} 960w, ${vilharia} 1280w`,
    width: 1280,
    height: 854,
  },
  mansarda: {
    src: mansarda,
    srcSet: `${mansarda640} 640w, ${mansarda960} 960w, ${mansarda} 1920w`,
    width: 1920,
    height: 933,
  },
  suhomontaza: {
    src: suhomontaza,
    srcSet: `${suhomontaza640} 640w, ${suhomontaza960} 960w, ${suhomontaza} 1920w`,
    width: 1920,
    height: 933,
  },
  zunanja_ureditev: {
    src: zunanja_ureditev,
    srcSet: `${zunanja_ureditev640} 640w, ${zunanja_ureditev960} 960w, ${zunanja_ureditev} 1920w`,
    width: 1920,
    height: 933,
  },
  dvojcek: {
    src: dvojcek,
    srcSet: `${dvojcek640} 640w, ${dvojcek960} 960w, ${dvojcek} 1920w`,
    width: 1920,
    height: 933,
  },
} satisfies Record<string, ImageSource>;
