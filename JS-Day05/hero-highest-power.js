const heroes = [
    { name: "悟空", power: 500 }, 
    { name: "克林", power: 80 }, 
    { name: "達爾", power: 450 }, 
    { name: "18號", power: 700 }
  ]


//  找出戰鬥力最高的
//  少寫[i]
let highest = 0
for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].power > highest) {
        highest = heroes[i].power
    }
}

console.log(highest)