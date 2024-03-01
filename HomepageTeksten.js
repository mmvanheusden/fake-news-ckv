const nieuws1 = `
### Bewijs in het dagelijkse leven dat de aarde plat is
**Datum**: 20 januari 2024  
We onthullen de leugens die de samenleving ons vertellen over de aarde
`
const nieuws2 = `
### Kanye west zegt geen antisemiet meer te zijn
**Datum**: 16 januari 2024  

`
const nieuws3 = `
### Lorem ipsum dolor sit amet, consectetur adipiscing elit
**Datum**: 9 januari 2024
`

document.getElementById('nieuws1').innerHTML = marked.parse(nieuws1);
document.getElementById('nieuws2').innerHTML = marked.parse(nieuws2);
document.getElementById('nieuws3').innerHTML = marked.parse(nieuws3);
