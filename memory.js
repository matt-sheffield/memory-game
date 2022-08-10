//Initializing variables for future functions
let cardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
let difficulty = "Medium"
let matchCount = 0;
let card_pop = 10;
let firstflip = null;
let imageArray;
let wrongAnswers = 0;
let columnSize = "col-3";
//Function that changes 

//Initializing game container to container 
let container = document.querySelector('.game-container');
//Establishing design of card using html file
let html = `<div class="flip-card"> <div class="flip-card-inner"> <div class="flip-card-front" style="background-image: url(https://m.media-amazon.com/images/M/MV5BMzMwYjc1N2MtY2U2Ny00MTc3LTk1YWQtYzE3NmM5NWQ2YzkyXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_.jpg); background-repeat: no-repeat; background-size: cover;"></div><div class="flip-card-back" style="background-repeat: no-repeat; background-size: cover;"> <h1></h1> </div></div></div>`;
//Populating image array with images folder names


function difficultyChange(num){
    switch (num) {
        case 0:
            card_pop = 8;
            document.getElementById("easyButton").className = "selected";
            document.getElementById("mediumButton").className = "";
            document.getElementById("hardButton").className = "";
            break;
        case 1:
            card_pop = 16;
            document.getElementById("easyButton").className = "";
            document.getElementById("mediumButton").className = "selected";
            document.getElementById("hardButton").className = "";
            // columnSize = "col-2"; - This is how we can make the tiles smaller and fit more on the page, you'd have to update the "main .flip-card" height to make it look better 
            break
        case 2:
            card_pop = 20;
            document.getElementById("easyButton").className = "";
            document.getElementById("mediumButton").className = "";
            document.getElementById("hardButton").className = "selected";
        default:
            break;
    }
    imageArray = ["ironManLogo","batManLogo","captainAmericaLogo","deadPoolLogo","flashLogo","greenLanternLogo","scottLogo","spiderManLogo","superManLogo","wonderWomanLogo"];
    imageArray = imageArray.flatMap(i => [i,i]);
    imageArray = imageArray.splice(0,card_pop);
    lives(card_pop/2)
    createpage(card_pop);
}

function lives(num){
    let lives = document.querySelector('#lives');
    lives.innerHTML = "";
    for (let index = 0; index < num; index++) {
        var banana = document.createElement('img');
        banana.src = './images/lives.png';
        lives.appendChild(banana);
    }
}

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
    if(firstflip === this)return;
    if(firstflip){
        let firstflipbackground = firstflip.querySelector('.flip-card-back').style.backgroundImage;
        if(firstflipbackground === currentbackgroundimage){
            matchCount++;
            let matchDisplayCount = document.getElementById("count");
            matchDisplayCount.innerText = matchCount;
            let win = new Audio("banana.mp3");
            win.play();
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
            wrongAnswers++;
            lives(card_pop/2 - wrongAnswers);
            if(wrongAnswers >= card_pop/2){
                alert("Better luck next time");
                setTimeout(()=> location.reload(),1000);
            }
        }
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
        card.className = columnSize;
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


