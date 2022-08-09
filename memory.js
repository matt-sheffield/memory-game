function arrayRemove(arr, value) { 
     return arr.filter(function(ele){ 
         return ele != value; 
     });
 }



let container = document.querySelector('.game-container');
let html = `<div class="flip-card"> <div class="flip-card-inner"> <div class="flip-card-front" style="background-image: url(https://m.media-amazon.com/images/M/MV5BMzMwYjc1N2MtY2U2Ny00MTc3LTk1YWQtYzE3NmM5NWQ2YzkyXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_.jpg); background-repeat: no-repeat; background-size: cover;"></div><div class="flip-card-back" style="background-repeat: no-repeat; background-size: cover;"> <h1></h1> </div></div></div>`;
let imageArray = ["ironManLogo","batManLogo","captainAmericaLogo","deadPoolLogo","flashLogo","greenLanternLogo","scottLogo","spiderManLogo","superManLogo","wonderWomanLogo"];
for (let index = 0; index < 8; index++) {
    let card = document.createElement("div");
    let idx = Math.floor(Math.random() * imageArray.length);
    card.className = "col-xs-6 col-sm-6 col-md-3";
    card.innerHTML = html;
    let background = card.querySelector('.flip-card-back');
    container.append(card);
    background.style.backgroundImage = "url('/images/" + imageArray[idx] + ".png')";
    arrayRemove(imageArray,imageArray[idx]);
}

