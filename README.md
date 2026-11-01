# UMS spletna stran

React + TypeScript + Vite. Domača stran ohranja prepoznaven uvod z logotipom in fotografijami ter ga dopolnjuje s predstavitvijo podjetja, področij dela, referenc in kontakta.

## Lokalni razvoj

Potreben je Node.js 20.19+ ali 22.12+ (priporočena podprta LTS različica).

```sh
npm ci
npm run dev
```

`npm start` je vzdevek za razvojni strežnik. Za dostop z drugih naprav uporabite `npm run dev -- --host 0.0.0.0`.

## Preverjanje in objava

```sh
npm run typecheck
npm run build
npm run preview
```

`build/` vsebuje produkcijsko stran. Na gostovanje prenesite vsebino te mape, ne razvojnih datotek. Strežnik mora neobstoječe poti usmeriti na `index.html`, da neposredno odpiranje in osvežitev poti `/storitve`, `/reference`, `/akt_projekti`, `/o_podjetju` in `/kontakt` delujeta z BrowserRouterjem. Objava je predvidena v korenu domene https://www.ums.si/.

Mapa `build/` je bila že vključena v Git. Zaradi obstoječega načina objave ni več prezrta: pri shranjevanju produkcijske gradnje vključite tudi nove datoteke `build/assets/`, ne samo spremenjenega `build/index.html`.

## Tehnična posodobitev

- Odstranjen Create React App, neuporabljene odvisnosti in vzorčne nastavitve.
- Strogo preverjanje TypeScript je del vsake produkcijske gradnje.
- Slike imajo ločen modul; zagonska datoteka ni več uvožena v komponente.
- Podstrani se nalagajo po potrebi, fotografije pod glavo pa z `loading="lazy"`.
- Ni več prednalaganja vseh fotografij ob odprtju strani.
- Poslušalci drsenja, časovnik drsnika in animacija uvoda imajo pravilno čiščenje.
- Uvodna animacija z logotipom je skrajšana na manj kot sekundo.

Za optimizacijo slik je uporabljen lokalni Media Studio (`C:\Users\nejcr\WORK\image_video_optimizer`, `engine.py`): fotografije WebP, kakovost 82, metoda 6, največ 1920 × 1080 brez povečave; logotipi brezizgubni WebP. Izvirniki ostanejo ohranjeni. Za ponovno optimizacijo uporabite izvirnike, ne že stisnjenih datotek.

## Oblikovna prenova

- Skupna navigacija in noga sta v `App.tsx`. Mobilni meni se zapre s tipko Escape, ob izbiri povezave ali kliku zunaj navigacije.
- Vsebina domačih storitev in izbora referenc je v `src/components/Domov/homeContent.ts`.
- Uvodni drsnik vsebuje obstoječe štiri fotografije. Ima ročno upravljanje in premor; samodejno menjavanje je izklopljeno pri zmanjšanem gibanju in v neaktivnem zavihku.
- Telefon: en stolpec storitev in vsebinskih sklopov. Tablica: dva stolpca storitev, zložen prikaz referenc pri manjši širini. Namizje: široka navigacija, razdeljena predstavitev projektov.
- `src/images/responsive/` vsebuje različice širine 640 in 960 slikovnih pik, pripravljene z Media Studio iz izvirnikov. Brskalnik s `srcSet` izbere primerno fotografijo. Metapodatki so v `src/responsiveImages.ts`.
- Podstrani ohranjajo obstoječo vsebino. Popravljene so prilagodljive mreže, prikaz kontaktov, vidnost letnic referenc in sidra pod fiksno navigacijo.

## Upravljanje projektov

Fotografije projektov so v `src/images/projects/`. Ime fotografije brez končnice določa prikaz:

- `Ime-projekta_2023.webp` doda projekt samo med reference.
- `Lokacija_Opis-projekta_Ime-projekta_2023.webp` doda projekt med aktualne projekte in reference.

Uporabite natanko dve ali štiri neprazna polja, ločena s podčrtaji. Zadnje polje mora biti letnica s štirimi številkami. Vezaji v poljih se prikažejo kot presledki; dejanski vezaji v besedilu zato niso podprti. Šumniki in ločila se ohranijo. Letnica pomeni leto projekta. Aktualnost določa štiridelno ime.

Na primer `Ihan-pri-Domžalah_Enotna-hiša-dvojček._Dvojček_2023.webp` prikaže lokacijo, opis, ime in leto ter projekt uvrsti med aktualne.

Odzivne različice so v `src/images/projects/responsive/` in sledijo imenu osnovne datoteke z dodano dejansko širino pred končnico, na primer `Ime-projekta_2023-640.webp`. Večje različice ustvarite iz izvirnika z lokalnim optimizatorjem. Če odzivnih različic ni, se uporabi osnovna fotografija. Različice za `/storitve` in druge neprojektne vsebine ostanejo v `src/images/` oziroma `src/images/responsive/`.

Za premik aktualnega projekta med same reference preimenujte osnovno fotografijo iz štiridelne v dvodelno ime (ime in letnica) ter enako uskladite imena odzivnih različic v `projects/responsive/`.
