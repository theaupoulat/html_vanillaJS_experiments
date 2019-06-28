// create alpha numeric name generator

const randomName = xChar => {
  const allChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
  ];
  let generatedString = "";
  for (let i = 0; i < xChar; i++) {
    let randomIndex = Math.floor(Math.random() * 36);
    console.log(randomIndex);
    generatedString += allChar[randomIndex];
  }

  return generatedString;
};

console.log(randomName(10));
