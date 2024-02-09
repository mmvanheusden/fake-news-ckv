const nieuws1_voor = `
# Gelekte beelden van NASA bewijzen dat de aarde plat is
**Datum**: 20 januari 2024  


---
<img src="../kaasjam.jpg"
     alt="NASA"
     style="width: 100%" />
<br><br>

`

const nieuws1_na = `
TEKST HIER XD

`
const nieuws2 = `
### Lorem ipsum dolor sit amet, consectetur adipiscing elit
**Datum**: 16 januari 2024  

`
const nieuws3 = `
### Lorem ipsum dolor sit amet, consectetur adipiscing elit
**Datum**: 9 januari 2024
`

document.getElementById('nieuws1_voor').innerHTML = marked.parse(nieuws1_voor);
document.getElementById('nieuws1_na').innerHTML = marked.parse(nieuws1_na);
document.getElementById('nieuws2').innerHTML = marked.parse(nieuws2);
document.getElementById('nieuws3').innerHTML = marked.parse(nieuws3);
