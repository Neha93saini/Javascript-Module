let img = document.querySelector('#image');
let currentdex =0;
let pictures =[
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
];
function next(){
  
    currentdex = pictures.indexOf(img.alt);
    if(currentdex >= pictures.length-1){
        currentdex = 0;
    } else {
        currentdex++;
    }
    img.src = pictures[currentdex];
    img.alt = pictures[currentdex];
}

function prev(){
    currentdex =pictures.indexOf(img.alt);
    if(currentdex <= 0){
        currentdex = 0;
    } else {
        currentdex--;
    }
    img.src = pictures[currentdex];
    img.alt = pictures[currentdex];
}

let int = setInterval(next,2000);

function stop(){
    clearInterval(int);
}



