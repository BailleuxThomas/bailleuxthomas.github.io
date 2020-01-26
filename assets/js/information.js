const demo = document.getElementById("demo");
const img1 = document.getElementById("Img1");
const img2 = document.getElementById("Img2");
const img3 = document.getElementById("Img3");

let test = 0;
const br = "<br>";


let Information = {
  "Info_to_portefolio": [
    { "Nom": "Website Beltek", "Description": "Migrer le site beltek en WordPres, améliorer le visu, le rendre plus fluide.", "Skill": "Php, Javascript, WordPress, Elementor", "Img": "./assets/img/beltek.jpg" },
    { "Nom": "Website Ladou", "Description": "Site Ladou 'L'attiéké déshydraté'", "Skill": "WordPress, E-Commerce, Elementor", "Img": "./assets/img/ladou.png" },
    { "Nom": "PlateFormeHorus", "Description": "La platformeHorus consiste à aider via des services de formation que cela soit en tutoriels, vidéos, chat, questions réponses.", "Skill": "WordPress,E-Commerce,Elementor,Plugin Cloud, FTP clients crées par un collègue et moi même.", "Img": "./assets/img/plateformehorus.png" },
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