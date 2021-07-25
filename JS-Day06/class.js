// construct 建構
// constructor 建構的傢伙 建構子
// class Hero {
//     constructor(name ,action) {
//         console.log(`${name}使用絕招${action}`)
//     }
//     attack() {
//         console.log(constructor())
//     } 
// }

// let h = new Hero("悟空", "龜派氣功")
// h.attack()  // 印出 悟空使用絕招龜派氣功


// 記得constructor裡要加this

class Hero {
    constructor(name ,action) {
        this.name = name
        this.action = action
    }
    // class 裡面的 function 寫法會跟外面不太一樣，因為Hero算是物件，attack()是裡面的屬性，{console.log(`${this.name}使用絕招${this.action}`)}是值
    attack() {
    // this=這顆物件本身
        console.log(`${this.name}使用絕招${this.action}`)
    } 
}

let h = new Hero("悟空", "龜派氣功")
h.attack()  // 印出 悟空使用絕招龜派氣功
console.log(h)