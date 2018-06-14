// Write a loop that goes from 1-20
// for (let i = 1; i < 21; i++){
//   console.log(i);
// }

// // Write a loop that will only log even numbers from 0-200
// for (let i = 0; i < 201; i++){
//   if(i % 2 === 0){
//     console.log((i));
//   };
// }

// // Excited Kittens
// for (let i = 0; i <= 20; i++){
//   if(i < 20) {
//     console.log("Love me, pet me! HSSSSSS!")
//     if(i % 2 === 0){
//       let catCall = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
//       let random = Math.floor(Math.random() * (4 - 1) * 1); //No idea how this works- just tested integers until I got it
//       console.log(catCall[random]);
//     }
//   };
// }

// Fizz Buzz
for (let i = 1; i < 101; i++){
  if(i % 15 === 0) {
    console.log("FizzBuzz");
  }
  else if(i % 5 === 0) {
    console.log("Buzz");
  }
  else if(i % 3 === 0) {
    console.log("Fizz");
  }
  else console.log(i);
  }
