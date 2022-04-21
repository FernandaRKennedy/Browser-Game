// const GAME_WIDTH = 800
// const GAME_HEIGHT = 300


// const gameElem = document.querySelector("[data-game]")
// const scoreElem = document.querySelector("[data-score]")
// const startScreenElem = document.querySelector("[data-start-screen]")

// setPixelToWorldScale()
// window.addEventListener("resize", setPixelToGamedScale)
// document.addEventListener("keydown", handleStart, { once: true })

// function setPixelToGameScale() {
//   let gameToPixelScale
//   if (window.innerWidth / window.innerHeight < GAME_WIDTH / GAME_HEIGHT) {
//     gameToPixelScale = window.innerWidth / GAME_WIDTH
//   } else {
//     gameToPixelScale = window.innerHeight / GAME_HEIGHT
//   }

//   gameElem.style.width = `${GAME_WIDTH * gameToPixelScale}px`
//   gameElem.style.height = `${GAME_HEIGHT * gameToPixelScale}px`
// }



//defining
const character = document.getElementById('character');
const cupcake = document.getElementById('cupcake');
const score = document.getElementById('score');

//function jump
function jump() {
  character.classList.add('jump-animation');
  setTimeout(() => {
    character.classList.remove('jump-animation');
   }, 1500);
}
//adding key function for the jump
document.addEventListener('keypress', () => {
  if (!character.classList.contains('jump-animation')) {
    jump();
  }
}) 

//seting parameters for the collision
setInterval(() => {
  const characterTop = parseInt(window.getComputedStyle(character)
    .getPropertyValue('top'));
  const cupcakeLeft = parseInt(window.getComputedStyle(cupcake)
    .getPropertyValue('left'));
  score.innerText++;

  if (cupcakeLeft < 0) {
    cupcake.style.display = 'none';
  } else {
    cupcake.style.display = '';
}

// debugger;
//colision detection
  if (cupcakeLeft <  300 && cupcakeLeft > 0 && characterTop >= 520) {
    console.log(characterTop)
    console.log(cupcakeLeft)
    alert("Your score is: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);
