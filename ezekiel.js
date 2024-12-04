//array of background images
const images = [
    'url("picha1.jpg")',
     'url("picha2.jpg")',
      'url("picha4.jpg")',
]
let currentindex= 0; 
//function to change background image
function changeBround(){
    const backgroundDiv=
    document.getElementById('background');
    backgroundDiv.style.backroundImage=Images[currentIndex];
    currentIndex=(currentIndex + 1) % Images.length; //loop back to the first image
}

//change the background every 5 seconds
setInterval(changeBackground,5000);

//set initial background
changeBackground();