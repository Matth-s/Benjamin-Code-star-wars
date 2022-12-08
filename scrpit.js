const bouton = document.querySelectorAll('.bouton');
const imageIcone = document.querySelectorAll('.image-icone');
const imageCarrousel = document.querySelectorAll('.image-carrousel');
const progressBar = document.querySelector('.progress-bar-color');
const rond = document.querySelectorAll('.rond');
const section = document.querySelectorAll('#container-section section');
const annee = document.querySelectorAll('.date span');


let compteurLargeur = 0;
let compteurRond = 0;
let compteurIcone = 0;

// fleche gauche inactive
bouton[0].style.pointerEvents = "none";
bouton[1].style.filter = "invert(88%) sepia(64%) saturate(800%) hue-rotate(20deg) brightness(101%) contrast(102%)";
// rendre invisible l icone, et les sections 2 et 3
imageIcone[1].style.opacity = "0";
imageIcone[2].style.opacity = "0";
section[1].style.opacity = "0";
section[2].style.opacity = "0";


bouton.forEach((boutonItem) => {
    boutonItem.addEventListener('click', function (e) {
        switch (e.target.id) {

            case "droite":
                compteurLargeur += 25;
                compteurRond += 1;

                // animation des icones glisser vers la gauche
                for (let i = 0; i < imageIcone.length; i++) {
                    imageIcone[i].style.transform += "translateX(-135%)";
                    imageIcone[i].style.transition = "transform 0.4s";
                    section[i].style.transform += "translateX(-104%)";
                    section[i].style.transition = "transform 0.2s";
                    annee[i].style.transform += "translateX(-100%)";
                }

                //rendre invisble l icone sortante
                imageIcone[compteurIcone].style.opacity = "0";
                imageIcone[compteurIcone].style.transition = "opacity 0.4s, transform 0.4s";
                section[compteurIcone].style.opacity = "0";
                section[compteurIcone].style.transition = "opacity 0.4s, transform 1.5s";
                annee[compteurIcone].style.opacity = "0";
                annee[compteurIcone].style.transition = "opacity 0.6s, transform 2s";

                // rendre visible l icone arrivante
                imageIcone[compteurIcone + 1].style.opacity = "1";
                imageIcone[compteurIcone + 1].style.transition = "opacity 0.4s, transform 0.4s";

                section[compteurIcone + 1].style.opacity = "1";
                section[compteurIcone + 1].style.transition = "opacity 0.8s, transform 0.2s";

                annee[compteurIcone + 1].style.opacity = "1";
                annee[compteurIcone + 1].style.transition = "opacity 0.8s, transform 0.4s";


                // animation carrousel vers la droite
                for (let i = 0; i < imageCarrousel.length; i++) {
                    imageCarrousel[i].style.transform += "translateX(-100%)";
                    imageCarrousel[i].style.transition = "transform 0.4s";
                }

                //progressbar grandir
                progressBar.style.width = compteurLargeur + "%";

                // ajouter la couleur au point actif
                rond[compteurRond].style.background = "#FFF38A";
                rond[compteurRond].style.transition = "background 1.5s";
                compteurIcone += 1;
                break;

            case "gauche":
                compteurLargeur -= 25;
                compteurIcone -= 1;

                // glisser les icones vers la gauche
                for (let i = 0; i < imageIcone.length; i++) {
                    imageIcone[i].style.transform += "translateX(135%)";
                    imageIcone[i].style.transition = "transform 0.4s";
                    section[i].style.transform += "translateX(104%)";
                    section[i].style.transition = "transform 0.4s";
                    annee[i].style.transform += "translateX(100%)";
                }

                // rendre visible l icone -1
                imageIcone[compteurIcone].style.opacity = "1";
                imageIcone[compteurIcone].style.transition = "opacity 0.4s, transform 0.4s";

                section[compteurIcone].style.opacity = "1";
                section[compteurIcone].style.transition = "opacity 0.8s, transform 0.3s";

                annee[compteurIcone].style.opacity = "1";
                annee[compteurIcone].style.transition = "opacity 1s, transform 0.5s";

                // rendre invisible l'icone +1
                imageIcone[compteurIcone + 1].style.opacity = "0";
                imageIcone[compteurIcone + 1].style.transition = "opacity 0.4s, transform 0.4s";

                section[compteurIcone + 1].style.opacity = "0";
                section[compteurIcone + 1].style.transition = "opacity 0.4s, transform 0.4s";

                annee[compteurIcone + 1].style.opacity = "0";
                annee[compteurIcone + 1].style.transition = "opacity 0.6s, transform 2s";

                // animation du carrousel
                for (let i = 0; i < imageCarrousel.length; i++) {
                    imageCarrousel[i].style.transform += "translateX(100%)";
                    imageCarrousel[i].style.transition = "transform 0.4s";
                }

                // diminuer la taille de la progress bar
                progressBar.style.width = compteurLargeur + "%";

                // enlever la couleur du point
                rond[compteurRond].style.background = "#827B68";
                rond[compteurRond].style.transition = "background 0.2s";

                compteurRond -= 1;

                break;
        }
        
        // butée fleche

        if (compteurIcone == 2) {
            bouton[1].style.pointerEvents = "none";
            bouton[1].style.filter = "";
            
        }
        else if (compteurIcone == 0) {
            bouton[0].style.pointerEvents = "none";
            bouton[0].style.filter = "";
            
        }
        else {
            bouton[0].style.filter = "invert(88%) sepia(64%) saturate(800%) hue-rotate(20deg) brightness(101%) contrast(102%)";
            bouton[1].style.filter = "invert(88%) sepia(64%) saturate(800%) hue-rotate(20deg) brightness(101%) contrast(102%)";
            bouton[1].style.pointerEvents = "auto";
            bouton[0].style.pointerEvents = "auto";
        }
    })
})