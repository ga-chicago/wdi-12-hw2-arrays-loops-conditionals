
// Section 1
// 1.
for(let i = 1; i <= 20; i++){
  console.log(i);
}

//2. 
for(let i = 0; i <= 200; i += 2){
  console.log(i);
}

// Section 2
// 1. 
for(let i = 0; i < 20; i++){
  console.log("Love me, pet me! HSSSSSS!");
}

// 2.
// initial attempt
// for(let i = 0; i < 20; i++){
//   if(i % 2 === 0){ 
//     console.log("...human...why you taking pictures of me?..");
//     console.log("...the catnip made me do it..");
//     console.log("why does the red dot always get away"); 
//     Math.random(i);
//   }
// }

// correct answer
const phrases = [
  "...human...why you taking pictures of me?..",
  "...the catnip made me do it..",
  "why does the red dot always get away"
];

for(let i = 0; i < 20; i++) {
  const decimalUnder3 = 3 * Math.random();
  const justTheInt = Math.floor(decimalUnder3);
  console.log(phrases[justTheInt]);
}

console.log(phrases[3]);


// Section 3
// 1. 
for(let i = 1; i <= 100; i++){
    // console.log(i);
// 2.
    if(i % 3 !== 0){
      console.log("fizz");
// 3.
    } else if (i % 5 !== 0){
      console.log("buzz");
// 4.
    } else (i % 3 !== 0 && i % 5 === 0)
      console.log("fizzbuzz");
    }

// Section 4
// 1.
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

  thom[0] = ("Gameboy");
  console.log(thom);
  karolin[1] = 17;
  console.log(karolin);
  matt[2] = ("gotham City");
  console.log(matt);
  kristyn[2] = ("Brooklyn");
  console.log(kristyn);


// Section 4
// 1.
// const tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
//     for(let i = 0; i <= tmnt.length; i++){
//       console.log(tmnt[i].toUpperCase([]));
//     }

// Section 5
// 1.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

kristynsCloset.shift();
const kristynsShoe = "left shoe";
thomsCloset[2].push("left shoe");
console.log([thomsCloset]);

const kristynOutfits = [
   ["left shoe", "marshmallow peeps"],
   ["cowboy boots", "green pants", "yellow knit hat"], 
   ["GA hoodie", "right sock"]];
   console.log("Kristyn is wearing " + kristynOutfits[0]);

const thomOutfits = [
  ["grey button-up", "grey jeans", "wool mittens"],
  ["dark grey button-up", "jeans", "wool scarf"],
  ["light blue button-up", "PJs", "raybans"]];
  console.log("Thom is wearing " + thomOutfits[1]);

console.log("WHIRR: now washing " + kristynsCloset);

console.log(thomsCloset[0], thomsCloset[1], thomsCloset[2]);






