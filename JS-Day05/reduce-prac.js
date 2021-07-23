// 印出大於 4 的數字的平方和
const lists = [4, 2, 1, 4, 6, 8, 7]
function greaterthan4(number) {
        return number > 4
}
// 建議拆開做，不要把平方放在reduce裡做，可以用map去做
function square(total, n) {
    return total + n * n
}
let newlists = lists.filter(greaterthan4)
                    .reduce(square, 0)
console.log(newlists)

// 試著用簡寫來寫看看(簡化版箭頭涵式)
// const lists = [4, 2, 1, 4, 6, 8, 7]
// console.log( lists.filter( (n) => n > 4) 
//                   .map( (n) => n ** 2)
//                   .reduce( (acc, n) => acc + n), 0)