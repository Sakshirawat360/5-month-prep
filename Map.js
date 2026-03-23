// map() - array ke har element per function run karta hai or new array return karta hai. 

const nums = [1,2,3,4]
const result = nums.map(n=>n*2)
console.log(result);

//---------------------------------------------

const users = [
  {name: "Sakshi", age: 25},
  {name:"Rahul", age: 22}
]

const age = users.map(user=> user.age)
const names = users.map(user=> user.name)
console.log(age);
console.log(names);

