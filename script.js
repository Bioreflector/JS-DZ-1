// task 1 Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let farengeit = celsius * 1.8 + 32;
  return console.log(`Task 1 result : ${farengeit} F`)
}
convertToF(-22)

// task 2 Reverse a String
function reversString(str) {
  return  console.log(`Task 2 result : ${str.split("").reverse().join("")}`)
}
reversString("hellow")

// function reversString(str){
//     let newStr = ""
//     for(let i = str.length -1; i >= 0 ; i --){
//         newStr += str[i]

//     }
//    return newStr
// }
//  console.log(reversString('hellow'))

// tack 3 Factorialize a Number
function factorialize(num) {
  let result = 1;
  if (num == 0) result;
  if (num > 0) {
    for (i = 1; i <= num; i++) {
      result *= i;
    }
    return console.log(`Task 3 result : ${result}`)
  }
}
factorialize(5);

// task 4 Find the Longest Word in a String
function findLongestWordLength(str) {
  let strlongest = "";
  const strArr = str.split(" ");
  strArr.forEach((item) => {
    if (strlongest.length < item.length) strlongest = item;
  });
  return console.log(`Task 4 result : ${strlongest.length}`);
}

findLongestWordLength("The quick brown jumped fox over the lazy dog");

// task 5 Return Largest Numbers in Arrays
function largestOfFour(arr) {
  const largeNumberArr = [];
  arr.forEach((item) => {
    let largeNumber = item.sort((a, b) => {
      return a - b;
    })[item.length - 1];
    largeNumberArr.push(largeNumber);
  });

  return console.log(`Task 5 result : ${largeNumberArr}`);
}
largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

// task 6 Confirm the Ending
function confirmEnding(str, target) {
  let result;
  str.substr(str.length - target.length, target.length) == target
    ? (result = true)
    : (result = false);
  return console.log(`Task 6 result : ${result}`);
}

//   function confirmEnding(str, target) {
//    console.log(str.endsWith(target))
//   }
confirmEnding("Bastian", "an");
confirmEnding("Congratulation", "on");
confirmEnding("Connor", "n");

// task 7 Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num <= 0) return newStr;
  else {
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return console.log(`Task 7 result : ${newStr}`);
}
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", 3)

// task 8 Truncate a String
function truncateString(str, num) {
  if (str.length > num) {
    return console.log(`Task 8 result : ${str.slice(0, num)}...`);
  } else {
    return console.log(`Task 8 result : ${str.slice(0, num)}`);
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

// task 9 Finders Keepers
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    } else {
      num = undefined;
    }
  }
  return console.log(`Task 9 result : ${num}`);
}
findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});
findElement([1, 3, 5, 9], function (num) {
  return num % 2 === 0;
});

// task 10 Boo who
function booWho(bool) {
    if (typeof bool ==='boolean') bool = true
    else bool = false
    return console.log(`Task 10 result : ${bool}`)  
  }
  booWho(true)
  booWho([1, 2, 3])

  // task 11 Title Case a Sentence
  function titleCase(str) {
    str = str.toLowerCase()
    str = str.split(' ').map((item) => item[0].toUpperCase()+item.slice(1)).join(' ')
    return console.log(`Task 11 result : ${str}`)
  }
  titleCase("I'm a little tea pot")
  titleCase("sHoRt AnD sToUt")