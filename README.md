# ininin-calculator
数字计算器

# install
npm i ininin-calculator

# github
https://github.com/yy-ininin/ininin-calculator

# usage
```javascript
import calculator from 'ininin-calculator'

/* 加 */
// calculator.add(number [,number...])
const result = calculator.add(1,2,3,4)
console.log(result)
// 10

/* 减 */
// calculator.sub(number [,number...])
const result = calculator.sub(1,2,3,4)
console.log(result)
// -8

/* 乘 */
// calculator.mul(number [,number...])
const result = calculator.mul(1,2,3,4)
console.log(result)
// 24

/* 除 */
// calculator.div(number [,number...])
const result = calculator.div(1,2,3,4)
console.log(result)
// 0.041666666666666664

/* 保留小数 */
// calculator.toFixed(number [,number...])
const result = calculator.toFixed(0.041666, 2)
console.log(result)
// 0.04
```