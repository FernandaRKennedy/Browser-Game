// const character = document.getElementById("character");
// const cupcake = document.getElementById("cupcake");
// const characterRect = character.getBoundingClientRect();
// const cupcakeRect = cupcake.getBoundingClientRect();
// let counter = 0;

// function jump() {
//   if (character.classList != "animate") {
//     character.classList.add("animate");
//   }
//   setTimeout(function () {
//     character.classList.remove("animate");
//     console.log(character);
//   }, 500);
//   console.log(character);
// }

// function resetGame() {
//   counter = 0;
//   debugger;
//   cupcakeRect.top = 0;
//   cupcakeRect.bottom = 0;
// }

// setInterval(function () {
//   if (hasCollision()) {
//     // Game over!
//     cupcake.style.animation = "none";
//     cupcake.style.display = "none";
//     alert("Game Over. score: " + Math.floor(counter / 100));
//     resetGame();
//     //cupcake.style.animation = "cupcake 1.5s infinite linear";
//   } else {
//     counter++;
//     document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
//   }
// }, 0);

// function hasCollision() {
//   return (
//     characterRect.bottom >= cupcakeRect.top &&
//     characterRect.right >= cupcakeRect.left
//   );
// }
// /**
//  * while (!notDead)
//  *  check if cupcake is touching the character
//  *  if true
//  *     tell player the game has ended
//  *     show the score
//  *     ask the player if they want to restart
//  *  if false
//  *     and cupcake is past the character
//  *     then increase the score by 1
//  *    else
//  *      repeat the loop
//  *
//  */
