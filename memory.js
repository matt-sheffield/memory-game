// function arrayRemove(arr, value) { 
//     return arr.filter(function(ele){ 
//         return ele != value; 
//     });
// }



let container = document.querySelector('.game-container');
let html = `<div class="flip-card"> <div class="flip-card-inner"> <div class="flip-card-front" style="background-image: url(https://m.media-amazon.com/images/M/MV5BMzMwYjc1N2MtY2U2Ny00MTc3LTk1YWQtYzE3NmM5NWQ2YzkyXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_.jpg); background-repeat: no-repeat; background-size: cover;"></div><div class="flip-card-back" style="background-image: url(https://storage.googleapis.com/oceanwide_web/media-dynamic/cache/widen_1100_progressive/media/default/0001/05/9eb2fb74dcf9dd4e20af036f805ead7707f969c6.jpeg); background-repeat: no-repeat; background-size: cover;"> <h1></h1> </div></div></div>`;
let imageArray = ["aquaManLogo","batManLogo","captainAmericaLogo"]
for (let index = 0; index < 20; index++) {
    let card = document.createElement("div");
    let idx = Math.floor(Math.random() * imageArray.length);
    let background = document.querySelector('.flip-card-back');
    card.className = "col-xs-6 col-sm-6 col-md-3";
    card.innerHTML = html;
    // background.style.backgroundImage = "url('/images/" + imageArray[idx] + ".png')";
    container.append(card);
}

