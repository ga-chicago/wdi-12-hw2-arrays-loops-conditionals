// EASY GOING

// 1.
  
  for (let i = 1; i <= 20; i++) {
    console.log (i);
  };

// GET EVEN

// 1.

  for (let i = 0; i <= 200; i+=2) {
    console.log (i);
  };

// EXCITED KITTEN

// 1.

  for (let i = 1; i <= 20; i++) {
    console.log ("Love me, pet me! HSSSSSS!");
  };

// 2.

  const kittySpeak = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0){
      console.log(kittySpeak[getRandomInt(3)]);
    } else { 
      console.log ("Love me, pet me! HSSSSSS!");
    }
  };

// FIZZ BUZZ

// 1.

  for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else {console.log(i)}
  };

// GETTING TO KNOW YOU

  const thom = ["Thom", 1000, "Christchurch"];
  const karolin = ["Karolin", 16, "New York"];
  const kristyn = ["Kristyn", 5, "Pittsburgh"];
  const matt = ["Matt H", 186, "Philadelphia"];

  // 1.

    const unnamed = thom.shift();
    const renamed = thom.unshift("Gameboy");
  
  // 2.

    karolin[1] = 17;
    
  // 3.

    matt[2] = "Gotham City";
  
  // 4.

    kristyn.pop();
    kristyn.push("Brooklyn");

  console.log(thom);
  console.log(karolin);
  console.log(kristyn);
  console.log(matt);

// YELL AT THE NINJA TURTLES

// 1.
  
  const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// 2.

  for (i = 0; i < ninjaTurtles.length; i++) {
    console.log(ninjaTurtles[i].toUpperCase())
  };











































