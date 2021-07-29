const isValidPassword = (password) => {
  // 規則：
  // 1. 密碼至少要 8 個字
  // 2. 密碼裡至少要有 1 個數字以及 1 個大寫英文字母
  // 3. 密碼裡不能有 "password" 字樣
  const length = 8
  const digit = /\d/
  const capital = /[A-Z]/
  const notcontain = /password/
  if (password.length > length && digit.test(password) && capital.test(password)) {
    return true
  } else if (notcontain.test(password)) {
    return false
  } else {
    return false
  }
}

console.log(isValidPassword("12345"));           // false
console.log(isValidPassword("123passwordxyz"));  // false
console.log(isValidPassword("helloworld"));      // false
console.log(isValidPassword("Helloworld"));      // false
console.log(isValidPassword("helloWorld2"));     // true
