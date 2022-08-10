//Initializing variables for future functions
let cardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
let difficulty = "Medium"
let matchCount = 0;
let imageArray;

//Function that changes 
function difficultyChange(num){
    let card_pop = 2;
    switch (num) {
        case 0:
            card_pop = 8;
            break;
        case 1:
            card_pop = 16;
            break
        case 2:
            card_pop = 20
        default:
            break;
    }
    imageArray = ["ironManLogo","batManLogo","captainAmericaLogo","deadPoolLogo","flashLogo","greenLanternLogo","scottLogo","spiderManLogo","superManLogo","wonderWomanLogo"];
    imageArray = imageArray.flatMap(i => [i,i]);
    imageArray = imageArray.splice(0,card_pop)
    createpage(card_pop);
}

//Initializing game container to container 
let container = document.querySelector('.game-container');
//Establishing design of card using html file
let html = `<div class="flip-card"> <div class="flip-card-inner"> <div class="flip-card-front" style="background-image: url(https://m.media-amazon.com/images/M/MV5BMzMwYjc1N2MtY2U2Ny00MTc3LTk1YWQtYzE3NmM5NWQ2YzkyXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_.jpg); background-repeat: no-repeat; background-size: cover;"></div><div class="flip-card-back" style="background-repeat: no-repeat; background-size: cover;"> <h1></h1> </div></div></div>`;
//Populating image array with images folder names



function getindex(len){
    return Math.floor(Math.random() * len);
}

function flipCard(){
    let currentbackgroundimage = this.querySelector('.flip-card-back').style.backgroundImage;
    //console.log(background.style.backgroundImage);
    this.classList.toggle("flipCard");
    cardFlipped = true;
    // Add audio to card flip
    let audio = new Audio("Card-flip-sound-effect.wav");
    audio.play();
    if(firstflip){
        let firstflipbackground = firstflip.querySelector('.flip-card-back').style.backgroundImage;
        if(firstflipbackground === currentbackgroundimage){
            matchCount++;
            if(matchCount >= card_pop /2){
                let reloadButton = document.getElementById('reload');
                reloadButton.innerText = "Play Again";
            }
        }
        else{
            let x = firstflip
            setTimeout(()=>{
                this.classList.toggle("flipCard");
                x.classList.toggle("flipCard");
            },1000)
        }
        firstflip = null;
        firstflip = null;
    }
    else{
        firstflip = this
    }
}


/*
 For loop that populates web page with cards using imageArray and randomly generates
 a number to select the index of the array for a photo. 
*/
function createpage(card_pop){
    let container = document.querySelector('.game-container');
    container.innerHTML = "";
    for (let index = 0; index < card_pop; index++) {
        let card = document.createElement("div");
        let idx = getindex(imageArray.length);
        card.className = "col-3";
        card.innerHTML = html;
        let background = card.querySelector('.flip-card-back');
        container.append(card);
        let flip = card.querySelector('.flip-card-inner');
        flip.addEventListener("click", flipCard);
        background.style.backgroundImage = "url('images/" + imageArray[idx] + ".png')";
        imageArray.splice(idx,1);
     }
    console.log(container.children);
}


