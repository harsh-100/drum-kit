var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTMl=this.innerHTML;
    makeSound(buttonInnerHTMl);
    makeAnimation(buttonInnerHTMl);
  });
//Mouse click functin ;;;;;;

  }



  document.addEventListener("keypress",function(){
    makeSound(event.key);
    makeAnimation(event.key);
  })
//KEYBOARD CLICK FUNCTION ON THE DESKTOP...................

function makeSound(key){
  switch (key) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;


    default:console.log(buttonInnerHTMl);

  }
}
  function makeAnimation(currentKey){


var buttonPressed=document.querySelector("."+currentKey);
buttonPressed.classList.add("pressed");

setTimeout(function(){
    buttonPressed.classList.remove("pressed");
  },100);

}
