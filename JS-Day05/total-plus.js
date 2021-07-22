// const lists = [4, 2, 1, 4, 6, 8, 7]
// let total = 0
// for (let i = 0; i < lists.length; i++) {
//     total = total + lists[i]
// }
// console.log(total)

const lists = [4, 2, 1, 4, 6, 8, 7]
let total = 0
lists.forEach((n) => {
    total = total + n
})
console.log(total)