// Topics Covered
// -let,const 
// for () for of
// functions,arguments, parameters
// scope,block scope, global scope
// falsy & truthy value 



const character = "#";
const count = 8;
const rows = [];
for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1))
  }
  
  let result = "";
  
  for (const row of rows) {
    result = result + row + "\n";
  }
  
  console.log(result);
//   Till Step 46

function padRow(name) {
    return name;
  }

function addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
  
  const sum = addTwoNumbers(5, 10);
  console.log(sum)
  // till step 56