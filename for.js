let items = ["a", "b", "c", "d"]
// 爛寫法，有變動就不會得到原本想得到的結果
// for (var i = 0; i < 4; i++) {
//     console.log(items[i])
// }
// 好寫法
for (var i = 0; i < items.length; i++) {
    console.log(items[i])
}