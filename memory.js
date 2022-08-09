//Initializing variables for future functions
let cardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

// Function that removes an element from an array once it has been selected.
function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

//Initializing game container to container 
let container = document.querySelector('.game-container');
//Establishing design of card using html file
let html = `<div class="flip-card"> <div class="flip-card-inner"> <div class="flip-card-front" style="background-image: url(https://m.media-amazon.com/images/M/MV5BMzMwYjc1N2MtY2U2Ny00MTc3LTk1YWQtYzE3NmM5NWQ2YzkyXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_.jpg); background-repeat: no-repeat; background-size: cover;"></div><div class="flip-card-back" style="background-repeat: no-repeat; background-size: cover;"> <h1></h1> </div></div></div>`;
//Populating image array with images folder names
let imageArray = ["ironManLogo","batManLogo","captainAmericaLogo","deadPoolLogo","flashLogo","greenLanternLogo","scottLogo","spiderManLogo","superManLogo","wonderWomanLogo"];

/*
 For loop that populates web page with cards using imageArray and randomly generates
 a number to select the index of the array for a photo. 
*/

function flipCard(){
    this.classList.toggle("flipCard");
    if(true){ // function to check if it's a match
        setTimeout(()=>{
            this.classList.toggle("flipCard");
        },1000)
    }
}

for (let index = 0; index < 12; index++) {
   let card = document.createElement("div");
   let idx = Math.floor(Math.random() * imageArray.length);
   card.className = "col-xs-6 col-sm-6 col-md-3";
   card.innerHTML = html;
   let background = card.querySelector('.flip-card-back');
   container.append(card);
   let flip = card.querySelector('.flip-card-inner');
   flip.addEventListener("click", flipCard);
   background.style.backgroundImage = "url('/images/" + imageArray[idx] + ".png')";
   arrayRemove(imageArray,imageArray[idx]);
}

//Initialize first card to flip on click
// cards = 
// cards.addEventListener("click", flipCard);

//Function for toggling flip card class from memory.css
