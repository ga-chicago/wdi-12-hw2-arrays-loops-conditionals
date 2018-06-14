console.log("Javascript is linked.")


//HW 3 Part 1: Easy Going
for (let i = 1; i <=20; i++) {
  console.log(`The number is ${i}`);
}



//HW 3 Part 2: Get Even
for (let i = 0; i <= 200; i += 2) {
  console.log(`The number is ${i}`);
}

//HW 3 Part 3: Excited Kitten
for (let i = 0; i < 20; i++) {
  console.log('Love me, pet me! HSSSSSS!');
  catPick = Math.floor(Math.random() * Math.floor(3));
  if (i % 2 === 0) {
    if (catPick === 0) {
      console.log("...human...why you taking pictures of me?...");
    } else if ( catPick === 1) {
      console.log("...the catnip made me do it...");
    } else if (catPick === 2) {
      console.log("...why does the red dot always get away...");
    }
  }
}

//HW 3 Part 4: Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

//HW 3 Part 5: Getting to Know You
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom.shift();
thom.unshift("Gameboy");
karolin[1] = 17;
matt[2] = "Gotham City";
kristyn.pop();
kristyn.push("Brooklyn");

//HW 3 Part 6: Yell at Ninja Turtles
ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (let i = 0; i < ninjaTurtles.length; i++) {
  console.log(ninjaTurtles[i].toUpperCase());
}


//HW 3 Part 7: Return of the Closets

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

kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);

console.log(`Kristyn can wear ${kristynsCloset[0]} with ${kristynsCloset[3]} and a ${kristynsCloset[2]}.`)
console.log(`Kristyn can also wear a ${kristynsCloset[1]} with ${kristynsCloset[3]} and ${kristynsCloset[5]}.`)
console.log(`Kristyn can also wear ${kristynsCloset[0]} with a ${kristynsCloset[2]} and a ${kristynsCloset[4]}.`)

console.log(`Thom can wear some ${thomsCloset[1][0]} with a nice ${thomsCloset[0][3]} shirt and some cool ${thomsCloset[2][2]}.`)
console.log(`Thom can also wear some ${thomsCloset[1][1]} with a nice ${thomsCloset[0][2]} shirt and a nice warm ${thomsCloset[2][1]}.`)
console.log(`Thom can also wear some comfy ${thomsCloset[1][2]} with a ${thomsCloset[0][0]} shirt and some nice warm ${thomsCloset[2][0]}.`)


//HW 3 Part 8: Dirty Laundry
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}.`);
}


for (let i = 0; i < thomsCloset.length; i++) {
  for (let j = 0; j < thomsCloset[i].length; j++) {
    console.log(thomsCloset[i][j]);
  }
}

//HW 3 Part 9: Multiples of 3 and 5
let sum = 0;
for (let i = 0; i < 1000; i++) {
  if ((i % 3 === 0) || (i % 5 === 0)) {
    sum = sum + i;
  }
}

console.log(sum);


//Triangles Part 0:
const argument = 7;
let triangle = [];
//Triangles Part 1:
for (let i = 0; i <= argument; i++) {
  triangle[i] = '';
}

for (let i = 0; i < argument; i++) {
  for (let j = 1; j <= i+1; j++) {
    triangle[i] = triangle[i] + '#';
  }
}

for (let i = 0; i < argument; i++) {
  console.log(triangle[i]);
}


//Triangles Part 2:
for (let i = 0; i <= argument; i++) {
  triangle[i] = '';
}

let counter = [];

for (let i = argument - 1; i >= 0; i--) {
  counter.push(i);
}

for (let i = 0; i < argument; i++) {
  for (let j = counter[i]-1; j >= 0; j--) {
    triangle[i] = triangle[i] + ' ';
  }
}

for (let i = 0; i < argument; i++) {
  for (let j = 1; j <= i+1; j++) {
    triangle[i] = triangle[i] + '#';
  }
}

for (let i = 0; i < argument; i++) {
  console.log(triangle[i]);
}


//Triangles Part 3: 



