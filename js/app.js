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