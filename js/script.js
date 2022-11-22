const containerImg = document.getElementById("img-container");
const containerTxt = document.getElementById("txt-container");
const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

// pagina iniziale
let index = 0;
changeImg();

// bottoni precedente e successivo
document.getElementById("next").addEventListener("click", nextImg);

document.getElementById("prev").addEventListener("click", prevImg);

// per cambiare l'immagine
function changeImg(){
    containerImg.innerHTML = `<img src="${images[index].image}">`;
    containerTxt.innerHTML = `<h2>${images[index].title}</h2><p>${images[index].text}</p>`
}

// per passare all'immagine successiva
function nextImg(){
    if(index < images.length - 1){
        index++;
        changeImg();
    }
    else{
        index=0;
        changeImg();
    }
}

// per passare all'immagine precedente
function prevImg(){
    if(index > 0){
        index--;
        changeImg();
    }
    else{
        index=images.length - 1;
        changeImg();
    }
}