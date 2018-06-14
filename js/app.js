// git add -A
// git commit -m
// git push origin master
//completed the assignment and completed commits
// make pull request, go to your fork/page make new pull request and submit
// console.log("javascript is harder than it looks and it looks hard")

// Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.

  // for (i = 1; i <= 20; i++){
  //   console.log(i);
  // } 

// Get Even
// 1. Write a for loop that will log only the even numbers in 0 through 200.

  // for (i = 0; i <=200; i++){
  //   if (i % 2 == 0){
  //     console.log(i);
  //   }
  // }

// Excited Kitten
// 1.Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
    // const kitten = ["Love me, pet me! HSSSSSS!"];

      // for (let i = 1; i <= 20; i++) {
      //   console.log(i + ". " + "Love me, pet me! HSSSSSS!");
      // }

// 2. For every even number in your loop,
 // log "...human...why you taking pictures of me?
 // ...", "...the catnip made me do it...", or "...
 // why does the red dot always get away..." at random. 
// come back too incomplete
    
//         for (let i = 1; i <= 20; i++) {
//           if (i % 2 == 0) {
//             console.log("...human...why you taking pictures of me?...");
//             } else if (i % 3 == 1) {
//               console.log("...why does the red dot always get away...");
//               } else
//                     console.log("...the catnip made me do it...");
//                         }  

// Fizz Buzz
// 1. Write a javascript application that logs all numbers from 1 - 100.

      // for (let i = 1; i <= 100; i++) {
        // if ((i % 5 !== 0) && (i % 3 == 1)) {
      //    console.log(i + ". " + "Fizz");
      //    } else if ((i % 3 !== 0) && (i % 5 == 0)) {
      //     console.log(i + ". " + "Buzz");
      //     } else
      //       console.log(i + ". " + "FizzBuzz");
      //   };

// Getting to Know You
// const thom = ["Thom", 1000, "Christchurch"];
// const karolin = ["Karolin", 16, "New York"];
// const kristyn = ["Kristyn", 5, "Pittsburgh"];
// const matt = ["Matt H", 186, "Philadelphia"];


// thom[0] = "Gameboy";
// karolin[1] = "17";
// matt[2] = "Gotham City";
// kristyn[2] = "Brooklyn";


// console.log(thom);
// console.log(karolin);
// console.log(matt);
// console.log(kristyn);

// Yell at the Ninja Turtles
// const tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
//  for (i = 0; i <= 3; i++){
// console.log(tmnt[i].toUpperCase());
// }
// Return of the Closets

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// //need more time to finish also cant think of formula so came up with the following

// // const a = thomsCloset[0][1];
// // const b = thomsCloset[0][2];
// // const c = thomsCloset[0][3];

// // const d = thomsCloset[1][0];
// // const e = thomsCloset[1][1];
// // const f = thomsCloset[1][2];

// // const g = thomsCloset[2][0];
// // const h = thomsCloset[2][1];
// // const j = thomsCloset[2][2];

// const shoe = kristynsCloset.shift()
// thomsCloset[2].push(shoe)
// // console.log(thomsCloset);
// // console.log(kristynsCloset);

// // console.log("Thom will be wearing " + a + " " + d + " " + g + " on monday.");
// // console.log("Thom will be wearing " + b + " " + e + " " + h + " on tuesday.");
// // console.log("Thom will be wearing " + j + " " + c + " " + f + " on wednesday");
// // console.log("kristyn will be wearing " + a + " " + d + " " + g + " on monday.");
// // console.log("kristyn will be wearing " + a + " " + d + " " + g + " on tuesday.");
// // console.log("kristyn will be wearing " + a + " " + d + " " + g + " on wednesday");

//     for (i = 0; i < 6; i++){
//         console.log("WHIRR: Now washing " + kristynsCloset[i]);
//  }

//     for (i = 0; i < 4; i++){   
//       console.log("Here is a list of Thom's shirts: " 
//         + thomsCloset[0] + "." + " " + " Here is a list of Thom's shirts: " 
//         + " " + thomsCloset[1] + "." + " Here is a list of Thom's shirts: " 
//               + thomsCloset[2] + "."); 
//     }

//unable to finish looked it up (numbers: 33165)
    let numbers = 0;

    for (let i = 0; i < 1000; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        (numbers += i);
      } 
    }
    console.log('numbers: %d', numbers);
















