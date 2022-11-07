const about =document.getElementById("about");
const body = document.getElementsByTagName("body");
let salam = new Audio("SALAM.mp3");
about.addEventListener("click",()=>{
  if(salam.paused || salam.currentTime<=0){
    salam.play();
  }
  else{
    salam.pause();
  }
  })
