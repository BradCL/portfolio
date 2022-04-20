const mybutton = document.getElementById("myBtn");
const frontCard1 = document.querySelector("#aboutMe1")
const frontCard2 = document.querySelector("#aboutMe2")
const frontCard3 = document.querySelector("#aboutMe3")
const backCard1 = document.querySelector("#backMe1")
const backCard2 = document.querySelector("#backMe2")
const backCard3 = document.querySelector("#backMe3")
const card1audio = document.querySelector("#aboutMe1Audio")
const card2audio = document.querySelector("#aboutMe2Audio")
const card3audio = document.querySelector("#aboutMe3Audio")
const work1audio = document.querySelector("#work1Audio")
// const work2audio = document.querySelector("")
// const work3audio = document.querySelector("")
let clickToRead = false



window.onscroll = function() {scrollFunction()};
document.querySelector("#card1").addEventListener("click", moveCard1)
document.querySelector("#card2").addEventListener("click", moveCard2)
document.querySelector("#card3").addEventListener("click", moveCard3)
document.querySelector("#readAloud").addEventListener("click", startStopReading)
document.querySelector("#readAloud").addEventListener("click", readOrNoRead)
document.querySelector("#card1").addEventListener("click", readCard1)
document.querySelector("#card2").addEventListener("click", readCard2)
document.querySelector("#card3").addEventListener("click", readCard3)
document.querySelector("#work1").addEventListener("click", readWork1)

// document.querySelector("#work2").addEventListener("click", readWork2)
// document.querySelector("#work3").addEventListener("click", readWork3)


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function moveCard1 (){
    frontCard1.classList.toggle('hidden');
    backCard1.classList.toggle('hidden');
}
function moveCard2 (){
    frontCard2.classList.toggle('hidden');
    backCard2.classList.toggle('hidden');
}
function moveCard3 (){
    frontCard3.classList.toggle('hidden');
    backCard3.classList.toggle('hidden');
}
function startStopReading (){
    clickToRead = !clickToRead;
}
function readOrNoRead(){
  card1audio.pause()
  card2audio.pause()
  card3audio.pause()
  work1audio.pause()
  if (clickToRead === true){
    document.querySelector(".instructions").style.border = "2px solid green";
  } else if (clickToRead === false){
    document.querySelector(".instructions").style.border = "none";
  }
}
function readCard1 (){
  if (clickToRead === true){
    card1audio.currentTime = 0;
    card1audio.play()
    card2audio.pause()
    card3audio.pause()
    work1audio.pause()
  }
}
function readCard2 (){
  if (clickToRead === true){
    card2audio.currentTime = 0;
    card2audio.play()
    card1audio.pause()
    card3audio.pause()
    work1audio.pause()
  }
}
function readCard3 (){
  if (clickToRead === true){
    card3audio.currentTime = 0;
    card3audio.play()
    card2audio.pause()
    card1audio.pause()
    work1audio.pause()
  }
}
function readWork1 (){
  if (clickToRead === true){
    work1audio.currentTime = 0;
    work1audio.play()
    card1audio.pause()
    card2audio.pause()
    card3audio.pause()
  }
}
// function readWork2 (){
//   if (clickToRead === true){
//     card1audio.play()
//   }
// }
// function readWork3 (){
//   if (clickToRead === true){
//     card1audio.play()
//   }
// }