let gridHolder = document.querySelector(".grid-holder");
let container = document.querySelector('.container');

function generateDivs(num) {
    gridWidth = num; 
    color = random_rgb();
    let i = 0;
    while (i < gridWidth ** 2){
        let box = document.createElement('div');
        box.classList.add('grid')
        box.style.background = color
        container.appendChild(box);
        i++
    }
    color = random_rgb();
}


function random_rgb() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`
}
generateDivs(16);