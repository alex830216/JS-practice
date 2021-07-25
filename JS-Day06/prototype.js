// 錯誤!!!


function heroCreator(name, action) {
    const attack = Object.create()
    const greeting = Object.create()

    function attack() {
        console.log("attack")
    }
    function greeting() {
        console.log("hello")
    }
}

const h1 = heroCreator("悟空", "龜派氣功")

h1.attack()
h1.greeting()