const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled)

const names=["Sree","Diya","Arun","KPP"]
const upper=names.map(name=>name.toUpperCase())
console.log(upper)

const salary=[2000,500,633]
const bonus=salary.map(sal=>sal+1000)
console.log(bonus)

const number = [5,19,35,7,9];
const square = number.map(num => num * num);
console.log(square)

const even=number.filter(num=>num%2==0)
console.log(even)
const odd=number.filter(num=>num%2!==0)
console.log(odd)

const great=number.filter(num=>num>10)
console.log(great)