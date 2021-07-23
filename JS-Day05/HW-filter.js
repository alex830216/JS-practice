const lists = [2, 4, 1, 8, 7, 3, 5]
function greaterThan(n) {
    return function (list) {
        return list > n
    }
}

const result = lists.filter(greaterThan(4))
console.log(result)  // 印出 [ 8, 7, 5 ]