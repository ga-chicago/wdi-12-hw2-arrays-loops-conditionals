
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
for(let i = 0; i < 20; i++){
  if(i % 2 === 0){ 
    console.log("...human...why you taking pictures of me?..");
    console.log("...the catnip made me do it..");
    console.log("why does the red dot always get away"); 
    Math.random(i);
  }
}

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
const tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
    for(let i = 0; i <= tmnt.length; i++){
      console.log(tmnt[i].toUpperCase([]));
    }

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

kristynsCloset.pull("left shoe");
const kristynsShoe = "left shoe";
pairs[2].push("left shoe");
console.log([thomsCloset]);



