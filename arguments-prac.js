// 檢查傳入的引數是否為某數的平方

// function isSquare(num) {
//     if (Number.isInteger (Math.sqrt (num) ) ) {
//         return true
//     }
//     else {
//         return false
//     }
// }
  
function isSquare(num) {
    if (num == (Math.sqrt (num) ** 2)) {
        return true
    }
    else {
        return false
    }
}

  console.log(isSquare(0))   // 印出 true
  console.log(isSquare(4))   // 印出 true
  console.log(isSquare(5))   // 印出 false
  console.log(isSquare(25))  // 印出 true
  console.log(isSquare(26))  // 印出 false


  console.log(isSquare(30.25))  // 印出 true
  console.log(isSquare(39.0625))  // 印出 true