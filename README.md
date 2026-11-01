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
