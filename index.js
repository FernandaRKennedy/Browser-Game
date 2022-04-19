//defining
const character = document.getElementById('character');
const cupcake = document.getElementById('cupcake');
const score = document.getElementById('score');

//function jump
function jump() {
  character.classList.add('jump-animation');
  setTimeout(() => {
    character.classList.remove('jump-animation');
   }, 500);
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

//colision detection
  if (cupcakeLeft < 100 && cupcakeLeft > 0 && characterTop >= 620) {
    console.log(characterTop)
    console.log(cupcakeLeft)
    //alert window
    // alert("Your score is: " + score.innerText +
    //   "\n\nPlay again?");
    // location.reload();
  }
}, 50);
