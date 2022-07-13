// task 1 Convert Celsius to Fahrenheit
function convertToF(celsius){
    let farengeit = celsius * 1.8 + 32
    return console.log(`${farengeit} F`)
}
convertToF(-22)

// task 2 Reverse a String

function reversString(str){
    return str.split("").reverse().join("");
}
console.log(reversString("hellow"))

// function reversString(str){
//     let newStr = ""
//     for(let i = str.length -1; i >= 0 ; i --){
//         newStr += str[i]
        
//     }
//    return newStr
// }
//  console.log(reversString('hellow'))

// tack 3 Factorialize a Number
function factorialize(num){
    let result = 1
    if(num == 0) result
    if(num > 0){
        for(i = 1 ; i<=num ; i++){
            result *= i
        }
        return result 
    }
    
}
console.log(factorialize(5))

// task 4 Find the Longest Word in a String
function findLongestWordLength(str) {
    let strlongest = ''
    const strArr = str.split(' ')
    strArr.forEach((item) =>{
        if( strlongest.length < item.length) strlongest = item
    })
    return console.log(strlongest.length)
  }
  
findLongestWordLength("The quick brown jumped fox over the lazy dog")

// task 5 Return Largest Numbers in Arrays
function largestOfFour(arr) {
    const largeNumberArr = []
    arr.forEach((item) =>{
        let largeNumber = item.sort((a , b) =>{
            return a - b
        })[item.length - 1]
        largeNumberArr.push(largeNumber)
        
    })
    
    return console.log(largeNumberArr)
  }
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])

// task 6 Confirm the Ending
function confirmEnding(str, target) {
    let result
    str.substr(str.length -target.length, target.length) == target ? result =true : result = false
    return console.log(result)
  }

//   function confirmEnding(str, target) {
//    console.log(str.endsWith(target))
//   }
 confirmEnding("Bastian", "an")
 confirmEnding("Congratulation", "on")
 confirmEnding("Connor", "n")

