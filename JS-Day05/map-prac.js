const lists = [4, 2, 1, 4, 6, 8, 7]
function triple(number) {
    if (number > 3) {
        return number * 3
    }
    else {
        return number
    }
}
let newlists = lists.map(triple)
console.log(newlists)


// 把大於 3 的數字乘以 3 倍
// [12, 2, 1, 12, 18, 24, 21]
// 使用 HOF