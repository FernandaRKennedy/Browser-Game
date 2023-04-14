//TODO:
// MAKE THE SCORE SHOW THE HIGH SCORE 
//INCREASE THE SPEED 

//defining
let intervalId = undefined;
const character = document.getElementById('character');
const CharacterWalking  = document.getElementById('walking');
CharacterWalking .style.display =  'none';
const cupcake = document.getElementById('cupcake');
cupcake.style.display =  'none';
let score = document.getElementById('score');
const startButton = document.getElementById('startButton') 
const gameOver = document.getElementById('gameOver')  
gameOver.style.display =  'none';
const overImage = document.getElementById('overImage')  
overImage.style.display =  'none';
const nuvem = document.getElementById('nuvem')
nuvem.style.display =  'none';
const background1 = document.getElementById('background1')
background1.style.display =  'block';
const backgroundIMG = document.getElementById('backgroundIMG')
backgroundIMG.style.display =  'none';
const die = document.getElementById('die')
const jump1 = document.getElementById('jump1')  





function start() { 
  CharacterWalking .style.display =  'block';
  character.style.display =  'none';
  startButton.style.display ='none';
  cupcake.style.display =  'block';
  nuvem.style.display =  'block';
  background1.style.display = 'none';
  backgroundIMG.style.display =  'block';
  //adding key function for the jump
  document.addEventListener('keypress',handlejump ) 
  //seting parameters for the collision
  intervalId = setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(CharacterWalking)
    .getPropertyValue('top'));
    const cupcakeLeft = parseInt(window.getComputedStyle(cupcake)
    .getPropertyValue('left'));
    score.innerText++;
    if (cupcakeLeft < 0) {
      cupcake.style.display = 'none';
    }
    //colision detection
    if (cupcakeLeft < 332 && cupcakeLeft > 0 && characterTop >= 520  ) {
      console.log(characterTop)
      console.log(cupcakeLeft)
      die.play()
      showGameOver()
    }
  }, 50);
}


//function jump
function jump() {
  CharacterWalking .classList.add('jump-animation');
  // sfx.jump1.play();
  jump1.play()
  setTimeout(() => {
  CharacterWalking.classList.remove('jump-animation');
  }, 1500);
}

function showGameOver() {
  gameOver.style.display =  'block';
  overImage.style.display =  'block';
  CharacterWalking.remove()
  cupcake.remove()
  character.remove()
  score.remove()
  jump1.setAttribute('src', '')
  document.removeEventListener('keypress', handlejump)

  intervalId = undefined;
  setTimeout(()=> location.reload(), 3000)
}

function handlejump(){
  if (!CharacterWalking.classList.contains('jump-animation')) {
        jump();

      }
}  

//calling the start and
document.addEventListener('keypress', (e) =>{
  start() 

})
