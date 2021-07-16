function printStars(n) {
    for (var i = 1; i <= n; i++) {
        for (var stars = 1; stars <= i; stars++) {
            process.stdout.write("*")
        }
        console.log()
    }
}

printStars(18)