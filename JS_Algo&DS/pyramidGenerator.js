// Topics Covered
// -let,const 
// for () for of
// functions,arguments, parameters
// scope,block scope, global scope
// falsy & truthy value 



// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
//   }
  
//   let result = "";
  
//   for (const row of rows) {
//     result = result + row + "\n";
//   }
  
//   console.log(result);
// //   Till Step 46

// function padRow(name) {
//     return name;
//   }

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
//   }
  
//   const sum = addTwoNumbers(5, 10);
//   console.log(sum)
  // till step 56

// Final Code
  const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);