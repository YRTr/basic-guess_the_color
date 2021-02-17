var colors = diffColors(6);
var boxes = document.querySelectorAll(".box");
var container = document.getElementById("container");
var message = document.querySelector("#message");
var schema = document.getElementById("rgb");
var header = document.querySelector("header");
var resetButton = document.getElementById("reset");

var choosenColor = pickOne();
schema.textContent = choosenColor;

for(var i = 0; i < boxes.length; i++){
  boxes[i].style.background = colors[i];
  //add a clickable event
  boxes[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    if(clickedColor == choosenColor) {
      for(var i = 0; i < boxes.length; i++){
        boxes[i].style.background = clickedColor;
        header.style.background = clickedColor;
        message.textContent = ">> CORRECT <<";
        resetButton.textContent = "PLAY AGAIN?";
      }
    }
    else {
      this.style.background = "#696969";
      message.textContent = "x TryAgain x";
      resetButton.textContent = "NEW COLORS";
    }
  });
}

resetButton.addEventListener("click", function(){
  colors = diffColors(6);
  choosenColor = pickOne();
  for(var i=0; i<boxes.length; i++){
    boxes[i].style.background = colors[i];
  }
  message.textContent = " ";
  header.style.background = "#696969";
  schema.textContent = choosenColor;
})

//choose a color from the array of colors
function pickOne(){
  var picked = Math.floor(Math.random() * colors.length);
  return colors[picked];
}

//getting random colors in according to available boxes
function diffColors(num){
  var arr = [];
  var i;
  for(i = 0; i < num; i++){
    arr.push(randomColorSelect());
  }
  return arr;
}

//code block for selecting random color
function randomColorSelect(){
  var R = Math.floor(Math.random() * 256);
  var G = Math.floor(Math.random() * 256);
  var B = Math.floor(Math.random() * 256);
  return "rgb(" + R + ", " + G + ", " + B + ")";
}
