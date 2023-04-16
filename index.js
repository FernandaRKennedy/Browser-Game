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
let rendomCupcakeInterva
const ghost = document.getElementById('ghost')
ghost.style.display =  'none';
// const cupcake2 = document.getElementById('cupcake2')
// cupcake2.style.display = 'none';



function start() { 
  CharacterWalking .style.display =  'block';
  character.style.display =  'none';
  startButton.style.display ='none';
  cupcake.style.display =  'block';
  nuvem.style.display =  'block';
  background1.style.display = 'none';
  backgroundIMG.style.display =  'block';
  // ghost.style.display = 'block';
  //adding key function for the jump
  document.addEventListener('keydown',handlejump ) 
  //seting parameters for the collision
  intervalId = setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(CharacterWalking)
    .getPropertyValue('top'));
    const cupcakeLeft = parseInt(window.getComputedStyle(cupcake)
    .getPropertyValue('left'));
    let ghostLeft
    // let cupcake2Left
    // const ghostLeft = parseInt(window.getComputedStyle(ghost)
    // .getPropertyValue('left'));
    score.innerText++;
    if (cupcakeLeft < 0) {
      cupcake.style.display = 'none';
    }
    if(score.innerText > 100){
      ghost.style.display = 'block'
      ghostLeft = parseInt(window.getComputedStyle(ghost)
    .getPropertyValue('left'));
    }
    // if(score.innerText > 75){
    //   cupcake2.style.display = 'block'
    //   cupcake2Left = parseInt(window.getComputedStyle(cupcake2)
    // .getPropertyValue('left'));
    // }
    //colision detection for cupcake
    if (cupcakeLeft < 280 && cupcakeLeft > 0 && characterTop >= 450 ) {
      console.log(characterTop)
      console.log(cupcakeLeft)
      die.play()
      showGameOver()
    }

    //colision detection  for ghost
    if (ghostLeft < 280 && ghostLeft > 0 && characterTop >= 450 ) {
      console.log(characterTop)
      console.log(ghostLeft)
      die.play()
      showGameOver()
    }

    //colision detection  for cupcake2
    // if (cupcake2Left < 280 && cupcake2Left > 0 && characterTop >= 400 ) {
    //   console.log(characterTop)
    //   console.log(cupcake2Left)
    //   die.play()
    //   showGameOver()
    // }
  }, 70);
}

function jump() {
  CharacterWalking .classList.add('jump-animation');
  jump1.play()
  setTimeout(() => {
  CharacterWalking.classList.remove('jump-animation');
  }, 1700);
}

function showGameOver() {
  gameOver.style.display =  'block';
  overImage.style.display =  'block';
  CharacterWalking.remove()
  cupcake.remove()
  cupcake2.remove()
  character.remove()
  ghost.remove()
  score.remove()
  jump1.setAttribute('src', '')
  document.removeEventListener('keydown', handlejump)

  intervalId = undefined;
  setTimeout(()=> location.reload(), 3000)
}

function handlejump(){
  if (!CharacterWalking.classList.contains('jump-animation')) {
        jump();

      }
}  

//calling the start and
document.addEventListener('keydown', (e) =>{
  start() 

})
