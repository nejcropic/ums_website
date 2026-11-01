import mansarda from "./images/mansarda.webp";
import mansarda640 from "./images/responsive/mansarda-640.webp";
import mansarda960 from "./images/responsive/mansarda-960.webp";
import zunanja_ureditev from "./images/zunanja_ureditev.webp";
import zunanja_ureditev640 from "./images/responsive/zunanja_ureditev-640.webp";
import zunanja_ureditev960 from "./images/responsive/zunanja_ureditev-960.webp";
import suhomontaza from "./images/suhomontaza.webp";
import suhomontaza640 from "./images/responsive/suhomontaza-640.webp";
import suhomontaza960 from "./images/responsive/suhomontaza-960.webp";
import adaptacije from "./images/adaptacije.webp";
import adaptacije640 from "./images/responsive/adaptacije-640.webp";
import adaptacije960 from "./images/responsive/adaptacije-960.webp";

export interface ImageSource {
  src: string;
  srcSet?: string;
  width?: number;
  height?: number;
}

export const responsiveImages = {
  mansarda: {
    src: mansarda,
    srcSet: `${mansarda640} 640w, ${mansarda960} 960w, ${mansarda} 1920w`,
    width: 1920,
    height: 933,
  },
  zunanja_ureditev: {
    src: zunanja_ureditev,
    srcSet: `${zunanja_ureditev640} 640w, ${zunanja_ureditev960} 960w, ${zunanja_ureditev} 1920w`,
    width: 1920,
    height: 933,
  },
  suhomontaza: {
    src: suhomontaza,
    srcSet: `${suhomontaza640} 640w, ${suhomontaza960} 960w, ${suhomontaza} 1920w`,
    width: 1920,
    height: 933,
  },
  adaptacije: {
    src: adaptacije,
    srcSet: `${adaptacije640} 640w, ${adaptacije960} 960w, ${adaptacije} 1920w`,
    width: 1920,
    height: 933,
  },
} satisfies Record<string, ImageSource>;
