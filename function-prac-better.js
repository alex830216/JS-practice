function displayName(firstName, lastName) {
    if (firstName === undefined && lastName === undefined) {
        console.log ("請輸入名稱")
    }
    else {
        // 不用寫 firstName === "Hello"
        if (firstName === "Hello" && lastName === undefined) {
            console.log ("Hello Kitty")
        }
        else {
            console.log (`${firstName} + ${lastName}`)
        }
    }
  }
  
  displayName("Hello", "Kitty")   // 印出 "Hello Kitty"
  displayName("Hello", "天線寶寶") // 印出 "Hello 天線寶寶"
  displayName("Hello")            // 印出 "Hello Kitty"
  displayName()                   // 印出 請輸入名稱