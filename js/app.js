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

//HW 3 Part 5: Getting to know you
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







