function printStars(n) {
    for (let i = 1; i <= n; i++) {
        let stars = ""
        let space = " "
        let j = n - i
        stars = stars + "*".repeat(i)
        space = space.repeat(j)
        console.log(space + stars)
    }
}

// better
// function printStars(n) {
//     for (let i = 1; i <= n; i++) {
//         let stars = "*".repeat(i)
//         let space = " ".repeat(n - i)
//         console.log(space + stars)
//     }
// }

printStars(6)