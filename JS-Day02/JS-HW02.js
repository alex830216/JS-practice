  // BMI值計算公式: BMI = 體重(公斤) / 身高2(公尺2)

function bmiCalculator(height, weight) {
    return Math.floor(weight / ((height / 100) ** 2) * 10) / 10
}    
  
  // 身高 170 公分、體重 65 公斤
console.log(bmiCalculator(170, 65))  // 印出 22.4