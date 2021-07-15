// 規則：
// 如果是 3 的倍數，換成 'Fizz'
// 如果是 5 的倍數，換成 'Buzz'
// 如果是 3 而且也是 5 的倍數，換成 'FizzBuzz'

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    //  for 第一個 i 記得加 var 
    //  for 第二個 i 可以寫 i < list.length 
for (i = 0 ; i < 15 ; i++) {
    //  不要改題目需求變成15，寫(list[i] % 3 == 0 && list[i] % 5 == 0)
    //  (i + 1) 可以換成 (list[i])
    if ((i+1) % (15) == 0) {
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