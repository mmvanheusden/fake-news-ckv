const nieuws1 = `
<img src="../kaasjam.jpg"
     alt="Markdown Monster icon"
     style="width: 100%" />
### Gelekte beelden van NASA bewijzen dat de aarde plat is
**Datum**: 20 januari 2024  
Er zou een simulatie zijn gelekt van NASA waarin te zien is hoe de aarde werd ingesloten door een gigantische meteoriet
`
const nieuws2 = `
### Lorem ipsum dolor sit amet, consectetur adipiscing elit
**Datum**: 16 januari 2024  

`
const nieuws3 = `
### Lorem ipsum dolor sit amet, consectetur adipiscing elit
**Datum**: 9 januari 2024
`

document.getElementById('nieuws1').innerHTML = marked.parse(nieuws1);
document.getElementById('nieuws2').innerHTML = marked.parse(nieuws2);
document.getElementById('nieuws3').innerHTML = marked.parse(nieuws3);
