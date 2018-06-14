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

