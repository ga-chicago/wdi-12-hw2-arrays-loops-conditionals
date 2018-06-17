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

  for (let i = 0; i < ninjaTurtles.length; i++) {
    console.log(ninjaTurtles[i].toUpperCase())
  };

// RETURN OF THE CLOSETS

  const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

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

// 1.

  const kristynsShoe = kristynsCloset.shift();

  thomsCloset[2].push(kristynsShoe);

  console.log(kristynsCloset);
  console.log(thomsCloset);

// 2.

  const kristynsFirstOutfit = [kristynsCloset[0], kristynsCloset[2], kristynsCloset[3]];

  const kristynsSecondOutfit = [kristynsCloset[1], thomsCloset[2][3], kristynsCloset[2], kristynsCloset[3]];

  const kristynsThirdOutfit = [kristynsCloset[5], kristynsCloset[4]];

  const thomsFirstOutfit = [thomsCloset[0][1], thomsCloset[1][0], thomsCloset[2][2]];

  const thomsSecondOutfit = [thomsCloset[0][0], thomsCloset[1][1], thomsCloset[2][2]];

  const thomsThirdOutfit = [thomsCloset[1][2], thomsCloset[2][0], thomsCloset[2][1]];

  console.log(`Today, Kristyn will be wearing: ${kristynsFirstOutfit}; Thom will be wearing: ${thomsFirstOutfit}.`)
  console.log(`Today, Kristyn will be wearing: ${kristynsSecondOutfit}; Thom will be wearing: ${thomsSecondOutfit}.`)
  console.log(`Today, Kristyn will be wearing: ${kristynsThirdOutfit}; Thom will be wearing: ${thomsThirdOutfit}.`)

// DIRTY LAUNDRY

// 1.

  for (let i = 0; i < kristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`)
  };

// 2.

  const r = thomsCloset[0].length;
  const s = thomsCloset[1].length;
  const t = thomsCloset[2].length;



  for (let i = 0; i < thomsCloset.length; i++) {
    const value = `[${i}]`;

    for (let j = 0; j < r; j++) {
      console.log(`thomsCloset[${i}][${j}]`)
    }

    for (let j = 0; j < s; j++) {
      console.log(`thomsCloset[${i}][${j}]`)
    }

    for (let j = 0; j < t; j++) {
      console.log(`thomsCloset[${i}][${j}]`)
    }

  };
// i feel like its close...

// MULTIPLES OF 3 & 5

// 1.
  
  const multiples = [];

  for (let i = 0; i < 1000; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      multiples.push(i);
    }
  };
  const finalSum = multiples.reduce((a, b) => a + b, 0);
  console.log (finalSum);
 







































