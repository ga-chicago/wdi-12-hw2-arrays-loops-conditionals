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

