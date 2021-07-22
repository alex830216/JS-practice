const heroes = [
    { name: "悟空", power: 500 }, 
    { name: "克林", power: 80 }, 
    { name: "達爾", power: 450 }, 
    { name: "18號", power: 700 }
  ]

const r = heroes.reduce( (max, hero) => {
    if(hero.power > max) {
        return hero.power
    }
    else {
        return max
    }
}, 0)
console.log(r)