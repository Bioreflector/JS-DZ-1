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

  // task 12 Slice and Splice
  function frankenSplice(arr1, arr2, n) {
    const clonArr2 = arr2.slice(0)
    for(let i = 0 ; i<arr1.length; i++){
      clonArr2.splice(n , 0 , arr1[i])
      n++
    }
    return console.log(`Task 12 result : ${clonArr2}`);
  }
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  frankenSplice([1, 2], ["a", "b"], 1)
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
  frankenSplice([1, 2, 3, 4], [], 0)

  // task 13 Falsy Bouncer
  function bouncer(arr) {
    arr = arr.filter((item) =>{
      if(item !== "" || item !== false ||
       item !== null || item !== 0 ||
       item !== undefined|| item !== NaN){
        return item
      }
    })
    return console.log(`Task 13 result : ${arr}`)
    
  }
  bouncer([7, "ate", "", false, 9]);
  bouncer(["a", "b", "c"])
  bouncer([false, null, 0, NaN, undefined, ""])
  bouncer([null, NaN, 1, 2, undefined])

  // task 14 Where do I Belong
  function getIndexToIns(arr, num) {
    arr.sort((a , b)=> a-b)
   for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] >= num ){
      num = i
      break
    }

   }
    return console.log(`Task 14 result : ${num}`);
  }
  getIndexToIns([10, 20, 30, 40, 50], 35)
  getIndexToIns([10, 20, 30, 40, 50], 30)
  getIndexToIns([5, 3, 20, 3], 5)
  getIndexToIns([40, 60], 50)
  getIndexToIns([3, 10, 5], 3)

  // task 15 Mutations
  function mutation(arr) {
    let result
    const firstStr = arr[0].toLowerCase()
    const seconStr = arr[1].toLowerCase()
    for(let i = 0; i < seconStr.length ; i++){
      if(firstStr.includes(seconStr[i])) result = true
      else{
        result = false
        break
      } 
    }
    return console.log(`Task 15 result : ${result}`)
  }
  mutation(["Mary", "Army"]) 
  mutation(["ate", "date"])
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
  mutation(["hello", "hey"])

  // task 16 Chunky Monkey
  function chunkArrayInGroups(arr, size) {
    const newArr = []
    for(let i = 0 ; i < arr.length ; i += size){
        newArr.push(arr.slice(i , i+size))
    }
    return  console.log((newArr))
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)