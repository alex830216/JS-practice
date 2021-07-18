function printStars(n) {
    for (let i = 1; i <= n; i++) {
        let leftstars = "*".repeat(i)
        let rightstars = "*".repeat(i-1)
        let space = " ".repeat(n - i)
        console.log(space + leftstars + rightstars)
    }
}

printStars(10)