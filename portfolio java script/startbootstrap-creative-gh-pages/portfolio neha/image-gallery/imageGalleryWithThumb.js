function displayImg () {
    document.querySelector(".display").src =this.src;
    document.querySelector(".picture").innerHTML =this.alt
}


document.querySelector(".display1").onclick = displayImg;
document.querySelector(".display2").onclick = displayImg;
document.querySelector(".display3").onclick = displayImg;
document.querySelector(".display4").onclick = displayImg;
