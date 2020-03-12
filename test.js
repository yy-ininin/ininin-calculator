const calculator = require('./index')

console.log("加")
const result = calculator.add(1,2,3,4)
console.log(result)

console.log("减")
const result2 = calculator.sub(1,2,3,4)
console.log(result2)

console.log("乘")
const result3 = calculator.mul(1,2,3,4)
console.log(result3)

console.log("除")
const result4 = calculator.div(1,2,3,4)
console.log(result4)

console.log("除")
const result5 = calculator.toFixed(0.041666)
console.log(result5)