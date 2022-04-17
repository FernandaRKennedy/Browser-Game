
const character = document.getElementById('character');
const cupcake = document.getElementById('cupcake');
const score = document.getElementById('score');


function jump() {
  character.classList.add('jump-animation');
  setTimeout(() => {
    character.classList.remove('jump-animation');
   }, 500);
}

document.addEventListener('keypress', () => {
  if (!character.classList.contains('jump-animation')) {
    jump();
  }
});


// const character = document.getElementById("character");
// const cupcake = document.getElementById("cupcake");
// const score= documet.getElementById("score");
//   //  debugger; 
// function jump(){
// 	character.classList.add("jump-animation");
// 	setTimeout=>
// 	character.classList.remove("jump-animation"), 500);

// }
//     // if(character.classList != "animate"){
//     // character.classList.add("animate");
//     // }
//     // setTimeout(function(){
//     //     character.classList.remove("animate");
//     // },500);
//     // console.log(character)

  
// }
// var checkDead = setInterval(function() {
//     const characterRect= character.getBoundingClientRect()
//     const cupcakeRect= cupcake.getBoundingClientRect()
//     console.log(characterRect.bottom)
//     console.log(cupcakeRect.top)
//       if(characterRect.bottom >=cupcakeRect.top && characterRect.right >= cupcakeRect.left){}

//         cupcake.style.animation = "none";
//         cupcake.style.display = "none";
//         alert("Game Over. score:");  
//         console.log(alert)// found something to cancel alert  
//         cupcake.style.animation = "cupcake 1.5s infinite linear";
//     }

//     else{
//         counter ++; 
// 				document.getElementById("soreSpan");
//         // document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
//     }
// }, 15);
