// //adding the elements 
// var character = document.getElementById("character");
// var cupcake = document.getElementById("cupcake");
// //colision detection 
// const characterRect = character.getBoundingClientRect();
// const cupcakeRect = cupcake.getBoundingClientRect();
// // score counter
// var counter = 0;

// //jump function
// function jump() {
//   if (character.classList != "animate") {
//     character.classList.add("animate");
//   }
//   setTimeout(function () {
//     character.classList.remove("animate");
//   }, 500);
//   console.log(character);
// }
// //colision detection + score 
// var checkDead = setInterval(function () {
//   console.log(`character bottom position: ${characterRect.bottom}`);
//   console.log(`cupcake top position: ${cupcakeRect.top}`);
//   if (
//     characterRect.bottom >= cupcakeRect.top &&
//     characterRect.right >= cupcakeRect.left
//   ) {
//     cupcake.style.animation = "none";
//     cupcake.style.display = "none";
//     console.log("Game over");
//     //alert("Game Over. score: " + Math.floor(counter / 100));
//     // console.log(alert); // found something to cancel alert
//     counter = 0;
//     cupcake.style.animation = "";
//   } else {
//     counter++;
//     // document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
//   }
// }, 15);
