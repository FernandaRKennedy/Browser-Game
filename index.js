//TODO://MAKE START BUTTON WORK
// MAKE THE SCORE SHOW THE HIGH SCORE 
// MAKE CHARACTER WALK 
// MAKE BACKGROUND MOVE 

// const GAME_WIDTH = 800
// const GAME_HEIGHT = 300

// startButton()
// window.addEventListener("resize", startButton)
// document.addEventListener("keydown",  { once: true })

//inside handlestart remove text
//defining
let intervalId = undefined;
const character = document.getElementById('character');
const moving  = document.getElementById('walking');
moving.style.display =  'none';
const cupcake = document.getElementById('cupcake');
cupcake.style.display =  'none';
const score = document.getElementById('score');
const startButton = document.getElementById('startButton') 
const gameOver = document.getElementById('gameOver')  
gameOver.style.display =  'none';
const overImage = document.getElementById('overImage')  
overImage.style.display =  'none';

 function start() { 
  moving.style.display =  'block';
  character.style.display =  'none';
  startButton.style.display ='none';
  cupcake.style.display =  'block';
//adding key function for the jump
// const jump-animation = document.createElement("assets/jumping.gif");  
document.addEventListener('keypress',handlejump ) 

//seting parameters for the collision
intervalId = setInterval(() => {
  const characterTop = parseInt(window.getComputedStyle(moving)
    .getPropertyValue('top'));
  const cupcakeLeft = parseInt(window.getComputedStyle(cupcake)
    .getPropertyValue('left'));
  score.innerText++;
  if (cupcakeLeft < 0) {
    cupcake.style.display = 'none';
  } else {
    cupcake.style.display = '';
}
//colision detection
  if (cupcakeLeft < 320 && cupcakeLeft > 0 && characterTop >= 520  ) {
    console.log(characterTop)
    console.log(cupcakeLeft)
    sfx.die.play();
    showGameOver()
  }
}, 50);
 }


//function jump
function jump() {
  moving.classList.add('jump-animation');
  sfx.jump.play();
  setTimeout(() => {
   moving.classList.remove('jump-animation');
   }, 1500);
}

function showGameOver() {
 gameOver.style.display =  'block';
 overImage.style.display =  'block';
 moving.style.display =  'none';
 cupcake.style.display =  'none';
 document.removeEventListener('keypress', handlejump)
 clearInterval(intervalId)
setTimeout(()=> location.reload(),3000)
}
  function handlejump(){
if (!moving.classList.contains('jump-animation')) {
        jump();
    
    }
  }
//audio
const sfx = {
  jump : new Howl({
    src: [
      'audio/jump.wav'
    ]
  
}),
die : new Howl({
  src:[
    'audio/die.wav'
  ]
})
}


//calling the start and
document.addEventListener('keypress', (e) =>{
 start() 

})















// //adding key function for the jump
// // const jump-animation = document.createElement("assets/jumping.gif");  
// document.addEventListener('keypress', () => {
//   if (!character.classList.contains('jump-animation')) {
//     jump();
//   }
// }) 

// //seting parameters for the collision
// setInterval(() => {
//   const characterTop = parseInt(window.getComputedStyle(character)
//     .getPropertyValue('top'));
//   const cupcakeLeft = parseInt(window.getComputedStyle(cupcake)
//     .getPropertyValue('left'));
//   score.innerText++;
//   if (cupcakeLeft < 0) {
//     cupcake.style.display = 'none';
//   } else {
//     cupcake.style.display = '';
// }

// // function showGameOver() {
 
// //   ctx.font = `${fontSize}px Verdana`;
// //   ctx.fillStyle = "grey";
// //   ctx.fillText("GAME OVER", cupcakeLeft, characterTop);
// // }


// // debugger;
// //colision detection

//   if (cupcakeLeft < 320 && cupcakeLeft > 0 && characterTop >= 520  ) {
//     console.log(characterTop)
//     console.log(cupcakeLeft)
  
//     // alert("Your score is: " + score.innerText +
//     //   "\n\nPlay again?");
//     // location.reload();
  
//   }
// }, 50);

// // function drawScore() {
// //   ctx.font = "16px Arial";
// //   ctx.fillStyle = "#0095DD";
// //   ctx.fillText(`Score: ${score}`, 8, 20);
// //   location.reload();
// // }



