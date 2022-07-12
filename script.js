// task 1
function convertToF(celsius){
    let farengeit = celsius * 1.8 + 32
    return console.log(`${farengeit} F`)
}
convertToF(-22)

// task 2

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

// tack 3
function factorialize(num){
    let result = 1
    if(num == 0) result
    if(num > 0){
        for(i = 1 ; i<=num ; i++){
            result = result * i
        }
        return result 
    }
    
}
console.log(factorialize(10))

