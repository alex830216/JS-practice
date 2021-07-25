// Q1
// 請說明何謂「抽象類別」




// // Q2
// let r = [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   );
  
// console.log(r); 

// // 會印出什麼？

// // [ 1, 2, 0, 1, 2, 3 ]

// // 為什麼？

// // reduce & concat 用法

// //           acc               cur

// // 一       [1,2]             [0,1]

// // 二     [1,2,0,1]           [2,3]

// // 三   [1,2,0,1,2,3]




// Q3
// function getInfo(member, year) {
//   member.name = 'Lydia';
//   year = '1998';
// }

// const person = { name: 'Sarah' };
// const birthYear = '1997';

// getInfo(person, birthYear);

// console.log(person, birthYear);

// 會印出什麼？

// { name: 'Lydia' } 1997

// 為什麼？

// 傳值 Value 不傳址 Reference

// function getInfo(member, year) {
//     //let member = { name: 'Sarah' }
//     //let year = '1997'
//     console.log(`person: ${person.name}, birthYear: ${birthYear}, year: ${year}`)
//     member.name = 'Lydia';
//     year = '1998';
//     console.log(`person: ${person.name}, birthYear: ${birthYear}, year: ${year}`)
// }
  
// const person = { name: 'Sarah' };
// const birthYear = '1997';

// getInfo(person, birthYear);

// console.log(person, birthYear); 




// // Q4
// function sayHi(name) {
//   return `Hi there, ${name}`;
// }

// console.log(sayHi()); 

// // 會印出什麼？

// // Hi there, undefined

// // 為什麼？

// // 引數 & 參數個數不同