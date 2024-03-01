
const nieuws2_1 = `
# **Kanye west zegt geen antisemiet meer te zijn**
<img src="./pics/ye.png" style="width: 70vh;"></img>

---

`

const nieuws2_2 = `

Rapper, songwriter, ondernemer, modeontwerper, presidentskandidaat en producent Kanye Omori West ook wel bekend als 'Ye' beweert dat hij joden niet meer haat na het kijken van 21 Jump Street. De Joodse acteur Jonah Hill speelt in die film. Kanye West was onder de indruk van zijn prestatie.

<img src="./pics/ye2.png" style="width: 70vh;"></img>

**Kanye schudt handen met een jood bij RTL Boulevard**<br>

Kanye West was gisterenavond langs bij RTL Boulevard samen met een jood uit Israelische oorsprong geboren in Nederland. Samen waren ze met diepe gesprekken bezig zoals de oorlog over Israël, Palestina en ook de aanleiding waarom Kanye West antisemitsch is. Uiteindelijk is het conflict opgelost en hebben ze handen geschud als een gebaar van respect.<br><br>

**Een bericht van de Israëlische president over Kanye west**

Volgens [RTL Nieuws](https://www.rtlnieuws.nl/nieuws/buitenland/artikel/5342668/kanye-west-isaac-herzog-israel-antisemitisme) heeft de president van Israël gereageerd op de ophef die ontstaan is uit de antisemitische uitspraken van Ye. In een interview zegt hij het volgende: **"We maken ons allemaal zorgen over antisemitisme overal in de wereld. Antisemitisme, racisme, vreemdelingenhaat - het zijn allemaal problemen van deze tijd, maar de geschiedenis leert ons dat het meestal begint met Jodenhaat, met Joden de schuld geven, met vreselijke woorden. Daarom doet het me enorm goed om deze imposante reacties op de uitlatingen van Kanye West te zien."**
`

document.getElementById('nieuws2_1').innerHTML = marked.parse(nieuws2_1);
document.getElementById('nieuws_content').innerHTML = marked.parse(nieuws2_2);
document.getElementById('nieuws2').innerHTML = marked.parse(nieuws2);
document.getElementById('nieuws3').innerHTML = marked.parse(nieuws3);
