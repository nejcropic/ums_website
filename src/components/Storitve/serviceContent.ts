import { responsiveImages } from "../../responsiveImages";

export const serviceContent = [
  {
    id: "gr_projekti",
    title: "Gradbeni projekti",
    lead: "Od ideje do strehe.",
    description: "Pri projektu sodelujemo v vseh fazah izvedbe – od priprave dokumentacije in ocene investicije do organizacije del ter zaključne primopredaje.",
    image: responsiveImages.dvojcek,
    alt: "Izveden stanovanjski objekt – hiša dvojček",
    groups: [
      { title: "Objekti, ki jih izvajamo", items: ["Stanovanjske hiše in večstanovanjske stavbe", "Skladišča in industrijski objekti", "Drugi objekti po željah naročnika"] },
      { title: "Kako sodelujemo pri izvedbi", items: ["Priprava ocene stroškov investicije", "Priprava in pridobitev projektne dokumentacije, soglasij ter dovoljenj", "Organizacija vseh izvedbenih aktivnosti", "Finančna kontrola projekta", "Tehnični nadzor izvedbe", "Ureditev primopredajnih zapisnikov z izvajalci in investitorjem"] },
    ],
  },
  {
    id: "adaptacije",
    title: "Adaptacije",
    lead: "Obstoječ prostor. Nove možnosti.",
    description: "Prostor uredimo po vaših željah in potrebah. Razbremenimo vas z organizacijo storitev od načrtovanja idejne zasnove do končne izvedbe.",
    image: responsiveImages.mansarda,
    alt: "Notranji prostor med prenovo",
    groups: [{ title: "Kaj zajema adaptacija", items: ["Priprava idejne zasnove in načrtovanje s 3D-predstavitvijo", "Demontaža nepotrebnega stavbnega pohištva in drugih konstrukcijskih elementov", "Izvedba gradbenih in obrtniških del", "Strokovni nadzor izvedbe", "Priprava tehnične in primopredajne dokumentacije"] }],
  },
  {
    id: "suhomontaza",
    title: "Suhomontažna dela",
    lead: "Izvedba, prilagojena prostoru.",
    description: "Vgradnja suhomontažnih sistemov je področje, s katerim smo začeli svojo pot. Sodelujemo pri novogradnjah in prenovah ter poskrbimo za organizacijo in izvedbo potrebnih del.",
    image: responsiveImages.suhomontaza,
    alt: "Izvedba suhomontažnih del",
    groups: [{ title: "Od načrtovanja do zaključka", items: ["Priprava idejne zasnove in načrtovanje", "Demontaža obstoječih elementov, kjer je potrebna", "Izvedba del in usklajevanje z drugimi izvajalci", "Strokovni nadzor izvedbe", "Priprava tehnične in primopredajne dokumentacije"] }],
  },
  {
    id: "zun_ureditev",
    title: "Zunanja ureditev",
    lead: "Urejena celota. Od objekta do okolice.",
    description: "Okolica je prvi stik z objektom. S funkcionalno in oblikovno usklajeno ureditvijo dvorišča povežemo hišo ali poslovno stavbo z zunanjim prostorom.",
    image: responsiveImages.zunanja_ureditev,
    alt: "Ureditev zunanjih površin ob objektu",
    groups: [{ title: "Ureditev zunanjih površin", items: ["Načrtovanje okolice", "Izkopi in zemeljska dela", "Razpeljava meteornih in fekalnih cevi", "Tlakovanje in asfaltiranje", "Ureditev zemlje in travne ruše"] }],
  },
];
