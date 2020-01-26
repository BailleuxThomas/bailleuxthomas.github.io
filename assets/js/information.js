const demo = document.getElementById("demo");
const img1 = document.getElementById("Img1");
const img2 = document.getElementById("Img2");
const img3 = document.getElementById("Img3");

let test = 0;
const br = "<br>";


let Information = {
  "Info_to_portefolio": [
    { "Nom": "Website Beltek1", "Description": "Migrer le site beltek en WordPres, améliorer le visu, le rendre plus fluide.", "Skill": "Php, Javascript, WordPress, Elementor", "Img": "./assets/img/beltek.jpg" },
    { "Nom": "Website Ladou2", "Description": "Site Ladou 'L'attiéké déshydraté'", "Skill": "WordPress, E-Commerce, Elementor", "Img": "./assets/img/ladou.png" },
    { "Nom": "Blabla3", "Description": "tt", "Skill": "tt", "Img": "./assets/img/plateformehorus.png" },
    { "Nom": "Blabla4", "Description": "", "Skill": "", "Img": "https://www.agglobus.com/sites/default/files/LIGNE%204%20OFFRE%20FINALE_0.jpg" },
    { "Nom": "Blabla5", "Description": "tt", "Skill": "tt", "Img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/5logo.jpg/280px-5logo.jpg" },
    { "Nom": "Blabla6", "Description": "", "Skill": "", "Img": "https://s3.amazonaws.com/tinycards/image/920ce0fd6aa58908b1c07e65f93cf469" },
    { "Nom": "Blabla7", "Description": "tt", "Skill": "tt", "Img": "https://www.var-ecobiz.fr/upload/docs/image/jpeg/2017-06/7.jpg" },
    { "Nom": "Blabla8", "Description": "", "Skill": "", "Img": "http://www.group8.ch/img/icons/ms-icon-310x310.png" },
    { "Nom": "Blabla9", "Description": "tt", "Skill": "tt", "Img": "https://vignette.wikia.nocookie.net/phobia/images/3/30/9.jpg/revision/latest?cb=20170105231539" },
    { "Nom": "Blabla10", "Description": "", "Skill": "", "Img": "https://www.ratp.fr/sites/default/files/network/metro/ligne10.1496915879.svg" },
    { "Nom": "Blabla11", "Description": "tt", "Skill": "tt", "Img": "https://larchedegloire.com/wp-content/uploads/2016/06/11.jpg" },
    { "Nom": "Blabla12", "Description": "", "Skill": "", "Img": "https://upload.wikimedia.org/wikipedia/commons/4/4a/MA_Route_12.svg" },
    { "Nom": "Blabla13", "Description": "tt", "Skill": "tt", "Img": "https://cdn.macrumors.com/article-new/2019/01/ios13roundupheadertemp.jpg" },
    { "Nom": "Blabla14", "Description": "", "Skill": "", "Img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5P9sV-5lmxNfMOKsv60rGAwzm2dbtWK85ddzh7wnSSN9pWRJ" },
    { "Nom": "Blabla15", "Description": "tt", "Skill": "tt", "Img": "http://pluspng.com/img-png/number-fifteen-png-15-clipart-500.png" },
    { "Nom": "Blabla16", "Description": "", "Skill": "", "Img": "https://upload.wikimedia.org/wikipedia/commons/5/54/Hauptstrasse_Nummer_16.svg" },

  ]
}

// console.log(Information.Info_to_portefolio.length);


function btnleft() {


  test += 1;

  if (test >= Information.Info_to_portefolio.length) {
    test = 0;
  }

  console.log(test);

  console.log(Information.Info_to_portefolio[test]);

  demo.innerHTML = "Nom : " + Information.Info_to_portefolio[test].Nom;
  demo.innerHTML += br;
  demo.innerHTML += "Description : " + Information.Info_to_portefolio[test].Description;
  demo.innerHTML += br;
  demo.innerHTML += "Skill : " + Information.Info_to_portefolio[test].Skill;
  demo.innerHTML += br;

  Img1url.href = Information.Info_to_portefolio[test].Img;
  Img1.src = Information.Info_to_portefolio[test].Img;
  Img1.alt = Information.Info_to_portefolio[test].Img;
}

function btnright() {

  test -= 1;

  if (test <= -1) {
    test = Information.Info_to_portefolio.length-1;
  }

  console.log(test);

  demo.innerHTML = "Nom : " + Information.Info_to_portefolio[test].Nom;
  demo.innerHTML += br;
  demo.innerHTML += "Description : " + Information.Info_to_portefolio[test].Description;
  demo.innerHTML += br;
  demo.innerHTML += "Skill : " + Information.Info_to_portefolio[test].Skill;
  demo.innerHTML += br;

  Img1url.href = Information.Info_to_portefolio[test].Img;
  Img1.src = Information.Info_to_portefolio[test].Img;
  Img1.alt = Information.Info_to_portefolio[test].Img;
}
// console.log(test);