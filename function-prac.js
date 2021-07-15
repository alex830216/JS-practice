function displayName(firstName, lastName) {
    if (firstName == "Hello" && lastName == "Kitty") {
        console.log (`"${firstName} ${lastName}"`)
    }
    else if (firstName == "Hello" && lastName == "天線寶寶") {
        console.log (`"${firstName} ${lastName}"`)
    }
    else if (firstName == "Hello") {
        console.log (`"${firstName} Kitty"`)
    }
    else {
        console.log("請輸入名稱")
    }
  }
  
  displayName("Hello", "Kitty")   // 印出 "Hello Kitty"
  displayName("Hello", "天線寶寶") // 印出 "Hello 天線寶寶"
  displayName("Hello")            // 印出 "Hello Kitty"
  displayName()                   // 印出 請輸入名稱