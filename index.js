//click
var numberofdrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  var ButtonInnerHTML=this.innerHTML;
  makeSound(ButtonInnerHTML);//makesound is triggred
  animation(ButtonInnerHTML);

  });
}

//keyboard press
document.addEventListener("keypress",function(event){//by document. it means that for the whole website anywhere you click it will come under addEventListener
  makeSound(event.key);
  animation(button.key);
})

function makeSound(key){//key is the parameter which stores the event which triggred addEventListener
switch(key){
  case "w":
    var tom_1=new Audio("sounds/tom-1.mp3");
    tom_1.play();
    break;
  case "a":
      var tom_2=new Audio("sounds/tom-2.mp3");
      tom_2.play();
    break;
  case "s":
    var tom_3=new Audio("sounds/tom-3.mp3");
    tom_3.play();
    break;
  case "d":
  var tom_4=new Audio("sounds/tom-4.mp3");
  tom_4.play();
  break;
  case "j":
  var snare=new Audio("sounds/snare.mp3");
  snare.play();
    break;
  case "k":
  var crash=new Audio("sounds/crash.mp3");
  crash.play();
   case "l":
   var kick_bass=new Audio("sounds/kick-bass.mp3");
   kick_bass.play();
   break;
   default: console.log(event);
}
}

function animation(currentKey){
  var active=document.querySelector("."+currentKey);
  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed");
  },100);

}
