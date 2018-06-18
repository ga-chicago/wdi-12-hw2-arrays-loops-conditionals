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