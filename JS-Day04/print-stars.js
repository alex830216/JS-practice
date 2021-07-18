function printStars(n) {
    for (var i = 1; i <= n; i++) {
        for (var stars = 1; stars <= i; stars++) {
            process.stdout.write("*")
        }
        console.log()
    }
}

// better
// function printStars(n) {
//     for (var i = 1; i <= n; i++) {
//         let stars = ""
//         stars = stars + "*".repeat(i)
//         console.log(stars)
//     }
// }

printStars(18)