import { responsiveImages } from "../../responsiveImages";

export const services = [
  {
    id: "gr_projekti",
    title: "Gradbeni projekti",
    description: "Od priprave projekta do zaključka gradnje.",
    image: responsiveImages.dvojcek,
  },
  {
    id: "adaptacije",
    title: "Adaptacije",
    description: "Nov namen in nova kakovost obstoječih prostorov.",
    image: responsiveImages.mansarda,
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

export const featuredProjects = [
  {
    id: "dvojcek",
    title: "Hiša dvojček",
    category: "Stanovanjski objekti",
    description: "Izvedba enotne hiše dvojček v Ihanu pri Domžalah.",
    location: "Ihan pri Domžalah",
    year: "2023",
    image: responsiveImages.dvojcek,
  },
  {
    id: "kvartet",
    title: "Kvartet Šiška",
    category: "Stanovanjski objekti",
    description:
      "Sodelovanje pri izvedbi dveh stanovanjskih stolpnic v ljubljanski Šiški.",
    location: "Ljubljana – Šiška",
    year: "2023",
    image: responsiveImages.kvartet_siska,
  },
  {
    id: "intercontinental",
    title: "Intercontinental",
    category: "Poslovni objekti",
    description: "Referenčni projekt hotela Intercontinental v Ljubljani.",
    location: "Ljubljana",
    year: "2017",
    image: responsiveImages.intercontinental,
  },
];
