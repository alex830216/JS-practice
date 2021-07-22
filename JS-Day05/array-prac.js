const lists = [4, 2, 1, 4, 6, 8, 7]

let newlists = []

for (i = 0; i < lists.length; i++) {
    newlists[i] = lists[i] * 2
}
console.log(lists)
console.log(newlists)
// 印出 [8, 4, 2, 8, 12, 16, 14]



// map方法

// const lists = [4, 2, 1, 4, 6, 8, 7]

// 自動把數帶到number裡
// function double(number) {
//     return number * 2
// }

// let newlists = lists.map(double)

// console.log(newlists)





// push用法
// const lists = [4, 2, 1, 4, 6, 8, 7]

// let listsTwice = [];
// for (let i = 0; i < lists.length; i++) {
//   listsTwice.push(lists[i] * 2)
// }

// console.log(listsTwice)

// 直接用破壞性操作
// const lists = [4,2,1,4,6,8,7]

// for (let i = 0; i < lists.length; i++) {
//     var num = lists[i]
//     lists[i] = num*2
// }
// console.log(lists);
