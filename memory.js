// function arrayRemove(arr, value) { 
//     return arr.filter(function(ele){ 
//         return ele != value; 
//     });
// }



let container = document.querySelector('.row');
var html = `<div class="col-xs-6 col-sm-6 col-md-3"> <div class="flip-card"> <div class="flip-card-inner"> <div class="flip-card-front" style="background-image: url(https://m.media-amazon.com/images/M/MV5BMzMwYjc1N2MtY2U2Ny00MTc3LTk1YWQtYzE3NmM5NWQ2YzkyXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_.jpg); background-repeat: no-repeat; background-size: cover;"></div><div class="flip-card-back" style="background-image: url(https://www.kindpng.com/picc/m/11-118606_meu-malvado-favorito-minions-jerry-png-minion-banana.png); background-repeat: no-repeat; background-size: cover;"> <h1></h1> </div></div></div></div>`;
let imageArray = ["aquaManLogo","batManLogo","captainAmericaLogo"]
for (let index = 0; index < 20; index++) {
    let card = document.createElement("div");
    let idx = Math.floor(Math.random()*imageArray.length);
    card.innerHTML = html;
    let background = document.querySelector('.flip-card-back');
    background.style.backgroundImage = "url('./images/"+imageArray[idx] + ".png')";
    card.className= "col-sm-3";
    container.append(card);
}

