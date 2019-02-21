// DISCARDS /////////////////////////////////////////////
// function randomColors() {
//     document.querySelector(".color1").setAttribute("value", getRandomColor());
//     document.querySelector(".color2").setAttribute("value", getRandomColor());
//     // document.querySelector(".color1").style.background = getRandomColor();
//     // document.querySelector(".color2").style.background = getRandomColor();
//     document.getElementById("gradient").style.background = "linear-gradient(to right, " + getRandomColor() + ", " + getRandomColor() + ")";
//     css.textContent = body.style.background + ";";
//     console.log(getRandomColor());
//     console.log(getRandomColor());
// };
//
// var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
// var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

// var randomColor1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
// var randomColor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);


// var randomColor1 = getRandomColor();
        
// var randomColor2 = getRandomColor();
/////////////////////////////////////////////////////////




// variables
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var rndmBtn = document.getElementById("randomizerButton");
var body = document.getElementById("gradient");

//  generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

// set the initial gradient on page load
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
};

// picks two random colors, assigns them to variables and sets input value and BG as the new colors
function randomColors() {
    var rndmCol1 = getRandomColor();
    var rndmCol2 = getRandomColor();

    document.querySelector(".color1").setAttribute("value", rndmCol1);
    document.querySelector(".color2").setAttribute("value", rndmCol2);
    document.getElementById("gradient").style.background = "linear-gradient(to right, " + rndmCol1 + ", " + rndmCol2 + ")";
    css.textContent = body.style.background + ";";
    console.log(rndmCol1);
    console.log(rndmCol2);
};

// function for pressing the space bar
function pressSpace() {
    if  (event.keyCode === 32) {
        randomColors();
        animateButton();
    }
    };


// function for animated button

function animateButton() {
    color1.classList.toggle("animated");
    color2.classList.toggle("animated");
};

function losefocus(){
    rndmBtn.blur();
};


// call function that sets initial gradient on page load
setGradient();

//  event listeners for color picking
window.addEventListener("onload", randomColors)
rndmBtn.addEventListener("mouseup", animateButton);
rndmBtn.addEventListener("mouseup", losefocus);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
rndmBtn.addEventListener("click", randomColors);
window.addEventListener("keydown", pressSpace);

