// function start() { 
//     CharacterWalking .style.display =  'block';
//     character.style.display =  'none';
//     startButton.style.display ='none';
//     cupcake.style.display =  'block';
//     nuvem.style.display =  'block';
//     background1.style.display = 'none';
//     backgroundIMG.style.display =  'block';
//     //adding key function for the jump
//     document.addEventListener('keypress',handlejump ) 
//     //seting parameters for the collision
//     intervalId = setInterval(() => {
//       const characterTop = parseInt(window.getComputedStyle(CharacterWalking)
//       .getPropertyValue('top'));
//       const cupcakeLeft = parseInt(window.getComputedStyle(cupcake)
//       .getPropertyValue('left'));
//       score.innerText++;
//       if (cupcakeLeft < 0) {
//         cupcake.style.display = 'none';
//       }
//       //colision detection
//       if (cupcakeLeft < 360 && cupcakeLeft > 0 && characterTop >= 520  ) {
//         console.log(characterTop)
//         console.log(cupcakeLeft)
//         sfx.die.play();
//         showGameOver()
//       }
//     }, 50);
//   }