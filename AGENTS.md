# UMS – navodila za delo v projektu

## Projekt in način dela

- Projekt uporablja React, TypeScript in Vite. Uporabi obstoječi npm lockfile in odvisnosti.
- Pred posegom preberi `git status --short`, preveri trenutno vejo in lokalna navodila. Ohrani uporabnikove spremembe; ne preklapljaj vej ali ponastavljaj kode brez zahteve.
- Uporabnik pričakuje izvedbo in preverjanje sprememb v lokalnem projektu. Ne objavljaj na Sites, ne spreminjaj gostovanja, ne potiskaj v Git in ne ustvarjaj commita brez izrecne zahteve.
- Ne dodajaj odvisnosti, če je nalogo mogoče dobro izvesti z obstoječimi orodji.
    
## Potrjena oblikovna smer

- Domača stran in prenovljena stran `/storitve` sta lokalna oblikovna referenca. Pred delom preberi njune komponente in CSS.
- Znamka: temno modra `--ums-navy`, modrosiva `--ums-blue`, rumeni poudarek `--secondaryColor`, pisava Titillium Web. Uporabi obstoječe CSS spremenljivke; najprej preveri njihove aktualne vrednosti.
- Profesionalna podoba gradbenega podjetja: velike dejanske fotografije, jasni večji naslovi, močne barvne ploskve, čvrsta mreža in razumljiva hierarhija informacij.
- Oblikovne reference uporabnika: Tosidos, CGP in Riko. Uporabi principe, ne njihovih besedil, fotografij ali znamk.
- Izogibaj se generičnim SaaS karticam, nepotrebnim sencam in zaoblitvam, dekorativnim ikonam, izmišljenim številkam ter praznim sloganom.
- Potrjenega uvoda domače strani, navigacije, noge in strani storitev ne prenavljaj ponovno, razen če je to nujno zaradi konkretne napake in znotraj zahteve.

## Struktura in podatki

- `src/App.tsx` upravlja skupno navigacijo, glavni vsebinski element, nogo in nalaganje podstrani. Na podstraneh jih ne podvajaj.
- Podatke razporedi v pregledne TypeScript strukture; dolgi opisi ne sodijo v nepregledne JSX nize ali elemente `pre`.
- Ohrani obstoječe poti, projektna imena, lokacije, leta in vsebino. Jezikovne popravke loči od sprememb dejstev.
- Ne ugibaj, ali je projekt končan oziroma še aktiven. Zastarela ali neskladna časovna navedba je razlog za opozorilo v končnem poročilu, ne dovoljenje za izmišljanje novega statusa.
- Ne dodajaj naslovov objektov, naročnikov, vrednosti investicij, vlog UMS ali drugih podatkov brez vira.
- Novi slogi naj bodo omejeni na pripadajočo stran ali komponento. Pred spreminjanjem skupnega CSS preveri vse njegove uvoznike; stare komponente projektov in storitev si delijo nekatere sloge.

## Fotografije

- Uporabi obstoječe fotografije in aktualni `src/responsiveImages.ts`. Ne prepisuj uporabnikovih novih slik ali ročno urejenih podatkov o njih.
- Kjer so na voljo, uporabi `srcSet`, ustrezen `sizes` ter dimenzije slike. Fotografije pod uvodom nalagaj leno; glavne fotografije ne nalagaj leno.
- Če pripravljaš dodatne velikosti, uporabi `C:\Users\nejcr\WORK\_image_video_optimizer\engine.py` oziroma tamkajšnjo skripto `prepare_responsive.py`. Ohrani izvirnike, razmerje stranic in pravilno orientacijo; slik ne povečuj in ne stiskaj ponovno že stisnjenih različic, kadar imaš izvirnik.
- Ne izmišljaj dimenzij za `srcSet`. Opise `alt` prilagodi dejanski vsebini in namenu fotografije.

## Odzivnost in dostopnost

- Oblikuj za telefone, tablice in računalnike, tudi ležečo orientacijo in širino 320 px. Brez vodoravnega prelivanja ali skrite vsebine.
- Informacije morajo biti dostopne brez hoverja. Letnice, opisi in povezave morajo biti berljivi tudi na dotik.
- Uporabi semantične naslove, sezname, povezave in gumbe. En glavni `h1` na strani; brez lažnih klikljivih kartic.
- Ohranjen mora biti viden fokus, upravljanje s tipkovnico, dovolj velike tarče na dotik in primeren kontrast.
- Upoštevaj `prefers-reduced-motion`; animacije ne smejo skrivati vsebine ali ovirati navigacije.
- Fiksna navigacija ali drugo lepljivo kazalo ne sme prekriti ciljev sidrnih povezav.

## Preverjanje in zaključek

- Zaženi `npm run build`, ki vključuje TypeScript preverjanje. Odpravi napake, ki jih uvede sprememba.
- Preveri spremenjene strani pri najmanj 320, 390, 768, 1024 in 1440 px ter eno ležečo mobilno postavitev. Preglej dejanski prikaz v brskalniku, kadar je na voljo.
- Preveri manjkajoče slike, napake v konzoli, neposredno odpiranje poti, notranjo navigacijo, tipkovnico in dotik. Preveri tudi domačo stran ter `/storitve` zaradi možnih regresij skupnih slogov.
- Ne dodajaj testov, ki zgolj ponavljajo implementacijo. Uporabi smiselna funkcionalna in vizualna preverjanja; avtomatsko preverjanje dostopnosti, kadar je na voljo.
- Pred zaključkom preglej `git diff --check` in obseg sprememb. `build/` je generirana in prezrta mapa: ne dodajaj je v Git in ne uporabljaj `git add -f`. Produkcijsko različico pripravi z `npm run build`.
- Končno poročilo napiši slovensko: kaj je spremenjeno, kako je preverjeno in katere vsebinske nejasnosti ostajajo. Ne trdi, da si preveril napravo ali brskalnik, ki ga nisi uporabil.
