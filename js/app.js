// Write a loop that goes from 1-20
// for (let i = 1; i < 21; i++){
//   console.log(i);
// }

// Write a loop that will only log even numbers from 0-200
// for (let i = 0; i < 201; i++){
//   if(i % 2 === 0){
//     console.log((i));
//   };
// }

// Excited Kittens
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
// for (let i = 1; i < 101; i++){
//   if(i % 15 === 0) {
//     console.log("FizzBuzz");
//   }
//   else if(i % 5 === 0) {
//     console.log("Buzz");
//   }
//   else if(i % 3 === 0) {
//     console.log("Fizz");
//   }
//   else console.log(i);
//   }

// // Getting To Know You
// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]
//
// thom[0] = "Gameboy";
// karolin[1] = "17";
// matt[2] = "Gotham City";
// kristyn[2] = "Brooklyn";


//  Yell At the Ninja Turtles
//  const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
//   for (i = 0; i < turtles.length; i++) {
//    console.log(turtles[i].toUpperCase());
//  }


//  Return of the Closets
// const kristynsCloset = ["left shoe", "cowboy boots", "right sock", "GA hoodie", "green pants", "yellow knit hat", "marshmallow peeps"];
// //  Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   // These are Thom's shirts
//   ["grey button-up", "dark grey button-up", "light blue button-up", "blue button-up"],
//
//   // These are Thom's pants
//   ["grey jeans", "jeans", "PJs"],
//
//   // Thom's accessories
//   ["wool mittens", "wool scarf", "raybans"]];


// //  Alien Attire
// const kristynsShoe = kristynsCloset.splice(0, 1);
//
// thomsCloset[2].push(kristynsShoe[0]);       //  adds variable kristynsShoe to Thom's accessories array
// console.log(thomsCloset);                   //  logging thomsCloset to double check successful change
//
// //Dress Up
// console.log("Today Kristyn will wear " + kristynsCloset[1] + ", " + kristynsCloset[2] + ", and " + kristynsCloset[3] + ".")       //These expressions reach inside of the array using index numbers to post the proper attire.
// console.log("Tomorrow Kristyn will wear "  + kristynsCloset[2] + ", " + kristynsCloset[5] + ", and " + kristynsCloset[1] + ".")
// console.log("Yesterda Kristyn wore "  + kristynsCloset[3] + ", " + kristynsCloset[4] + ", and " + kristynsCloset[5] + ".")


// // Dirty Laundry
// for (let i = 0; i < kristynsCloset.length; i++) {         //  This for loop iterates over the closet array
// console.log("WHIRR: Now washing " + kristynsCloset[i]);   //  This console logs it. Squeaky clean!
// }
//
// //  Inventory
// for (let i = 0; i < thomsCloset.length; i++) {            //  This for loop iterates over the entire closet
//   console.log(thomsCloset[i]);                            //  This logs them arrays, i here lists the contents
// }

//  Multiples of 3 and 5
let somethingA = 0    //defining variables for math
let somethingB = 0
let sum = 0

for (let i = 0; i < 1000; i++) {  //for loop for counting through to 1000
  if (i % 3 === 0){
    (somethingA += i)             //These % operations find if the number is divisible
  }                               //They += keeps the number counting up
  if (i % 5 === 0){
    (somethingB += i)
  }
}
sum = somethingA + somethingB    //Adds everything up
  console.log(sum);
