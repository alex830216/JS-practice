// 規則：
// 如果是 3 的倍數，換成 'Fizz'
// 如果是 5 的倍數，換成 'Buzz'
// 如果是 3 而且也是 5 的倍數，換成 'FizzBuzz'

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (i = 0 ; i < 15 ; i++) {
    if ((i+1) % (3 * 5) == 0) {
        list[i] = 'FizzBuzz'
    }
    else if ((i+1) % 5 == 0) {
        list[i] = 'Buzz'
    }
    else if ((i+1) % 3 == 0) {
        list[i] = 'Fizz'
    }
}

console.log(list);
// 印出 [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']