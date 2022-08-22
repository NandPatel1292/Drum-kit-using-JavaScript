// function for the clicking the key on teh button
let array = document.getElementsByClassName("drum");
for (let i = 0; i < array.length; i++) {
  array[i].addEventListener("click", function () {
    sound(this.innerHTML);
    btn_animation(this.innerHTML);
  });
}


//function for the pressing the key on the keybord
document.addEventListener("keydown",function (event) {
    sound(event.key);
    btn_animation(event.key);
});

// for making the sound
function sound(key) {
    switch (key) {
        case "w":
          let tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
    
        case "a":
          let tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
    
        case "s":
          let tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
    
        case "d":
          let tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
    
        case "j":
          let snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
    
        case "k":
          let crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
    
        case "l":
          let kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
    
        default:
          break;
      }
}


function btn_animation(cur_key) {
    let act_btn = document.querySelector("." +  cur_key);
    act_btn.classList.add("pressed");

    setTimeout(() => {
        act_btn.classList.remove("pressed");
    }, 100);
}