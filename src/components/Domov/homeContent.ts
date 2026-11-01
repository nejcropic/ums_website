import { responsiveImages } from "../../responsiveImages";
import { projects } from "../../projects/projects";
import { Gradbeni_projekti } from "../../images";

const featuredConstruction =
  projects.find((project) => project.title === "Dvojček") ?? projects[0];
const constructionImage = featuredConstruction
  ? { src: featuredConstruction.photo, srcSet: featuredConstruction.srcSet }
  : { src: Gradbeni_projekti };

export const services = [
  {
    id: "gr_projekti",
    title: "Gradbeni projekti",
    description: "Od priprave projekta do zaključka gradnje.",
    image: constructionImage,
  },
  {
    id: "adaptacije",
    title: "Adaptacije",
    description: "Nov namen in nova kakovost obstoječih prostorov.",
    image: responsiveImages.adaptacije,
  },
  {
    id: "suhomontaza",
    title: "Suhomontažni sistemi",
    heroTitle: "Suhomontažna dela",
    description: "Izvedba suhomontažnih del pri novogradnjah in prenovah.",
    image: responsiveImages.suhomontaza,
  },
  {
    id: "zun_ureditev",
    title: "Zunanja ureditev",
    description: "Urejene površine, ki povežejo objekt z okolico.",
    image: responsiveImages.zunanja_ureditev,
  },
];
