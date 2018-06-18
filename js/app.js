console.log("The javascript is loaded.");

// Easy Going
// Q1.
for(let i = 1; i <= 20; i++) {
	console.log(i);
}

// Get Even
// Q1.
for(let i = 0; i <= 200; i+=2) {
	console.log(i);
}

// Excited Kitten
// Q1.
for(let i = 1; i <= 20; i++) {
	console.log("Love me, pet me! HSSSSSS!");
}

// Q2.
const phrases = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for(let i = 1; i <= 20; i++) {
	console.log("Love me, pet me! HSSSSSS!");
	if(i % 2 == 0) {
		let randomNum = (parseInt(Math.random()*3));
		console.log(phrases[randomNum]);
	}
}

// Fizz Buzz
// Q3.
for(let i = 1; i <= 100; i++) {
	if((i % 3 === 0) && (i % 5 === 0)) {
		console.log("FizzBuzz");
	} else if(i % 3 === 0) {
		console.log("Fizz");
	} else if(i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

// Getting to Know You
// Q1.
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy"

// Q2.
karolin[1] += 1;

// Q3.
matt[2] = "Gothem City"

// Q4.
kristyn.pop("Pittzburgh");
kristyn.push("Brooklyn");

// Yell at the Ninja Turtles
// Q1.
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// Q2.
for(let i = 0; i <= ninjaTurtles.length-1; i ++) {
	ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
	console.log(ninjaTurtles[i]);
}

// Return of the Closets
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

// Alien Attire
// Q1.
let kristynShoe = [kristynsCloset.splice(0, 1)];
thomsCloset[2].push(kristynShoe.splice(0,1) + "");

console.log(kristynShoe);
console.log(thomsCloset);
// Dress Us Up
// Q2.

let outfitOne = kristynsCloset;
console.log("Kristyn's outfit will be " + outfitOne[0] + ", " + outfitOne[1] + ", " + outfitOne[2] + ", and " + outfitOne[3] + ".");

let outfitTwo = [thomsCloset[0].slice(0,1), thomsCloset[1].slice(0,1), thomsCloset[2].slice(0,1)];
console.log("Thom's first outfit will be " + outfitTwo[0] + ", " + outfitTwo[1] + ", and " + outfitTwo[2] + ".");

let outfitThree = [thomsCloset[0].slice(1,2), thomsCloset[1].slice(1,2), thomsCloset[2].slice(1,2)];
console.log("Thom's second outfit will be " + outfitThree[0] + ", " + outfitThree[1] + ", and " + outfitThree[2] + ".");

// Dirty Laundy
// Q1.
for(let i = 0; i <= kristynsCloset.length-1; i++) {
	console.log("WHIRR: Now washing " + kristynsCloset[i] + ".");
}

// Q2.
// Thom's Shirts
for(let i = 0; i <= thomsCloset[0].length-1; i++) {
	console.log("Thom has " + thomsCloset[0][i] + " in his shirt closet.");
}
// Thom's Pants
for(let i = 0; i <= thomsCloset[1].length-1; i++) {
	console.log("Thom has " + thomsCloset[1][i] + " in his pants drawer.");
}

// Thom's Accessories
for(let i = 0; i <= thomsCloset[2].length-1; i++) {
	console.log("Thom has " + thomsCloset[2][i] + " in his accessorie drawer.");
}

// Multiples of 3 and 5
let sum = 0;

for(let i = 0; i < 1000; i++) {
	if((i % 3 === 0) || (i % 5 === 0)) {
		sum += i;
	}
}

console.log(sum);

// Hungry for more?
// Triangles
// Q0.
const argument = 7;

// Q1.
let rowOne = "";

for(let i = 0; i <= argument; i++) {
	rowOne += "#";
	console.log(rowOne);
}

// Q2.
for(let i = 0; i <= argument; i++) {
	let rowTwo = "";
	for(let j = 0; j <= argument-1-i; j++) {
		rowTwo += " ";
	}
	for(let k = 0; k <= i; k++) {
		rowTwo += "#";
	}
	console.log(rowTwo);
}

// Q3.
for(let i = 0; i <= argument; i++) {
	let rowThree = "";
	for(let j = 0; j <= argument-i; j++) {
		rowThree += "#";
	}
	console.log(rowThree);
}

//Q4.
for(let i = 0; i <= argument; i++) {
	let rowFour = "";
	for(let j = 0; j <= i-1; j++) {
		rowFour += " ";
	}
	for(let k = 0; k <= argument-i; k++) {
		rowFour += "#";
	}
	console.log(rowFour);
}

// Q5.
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

const sortedNums = nums.sort(function(a, b){return a-b});
console.log(sortedNums);

let sumNums = 0;
for(let i = 0; i <= sortedNums.length-1; i++) {
	sumNums += nums[i];
}

const medianNums = parseInt(sumNums/sortedNums.length);

console.log(medianNums);
