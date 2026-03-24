// const nums = [2, 4, 6, 8, 10];

// const result = nums.map(n=> n*n)
// console.log(result);

//  const nums = [1, 2, 3, 4, 5, 6, 7, 8];

//  const even = nums.filter(n=> n%2 ===0 )
//  console.log(even);
 
  
// const nums = [5, 10, 15, 20];
// const sum = nums.reduce((acc,curr)=> acc+curr, 0)
// console.log(sum);


// const users = [
//   { name: "Aman", age: 21 },
//   { name: "Riya", age: 17 },
//   { name: "Rahul", age: 25 },
//   { name: "Neha", age: 16 }
// ];

// const result = users.filter(user => user.age>=18).map(user=> user.name)

// console.log(result);

// const nums = [1, 2, 3, 4];

// const result = nums.reduce((acc,curr)=>{
//  acc.sum += curr;
// acc.prod *= curr;
// return acc;
// },{sum: 0, prod: 1})

// console.log(result);


const arr = [1, 2, 3, 4, 5, 6,7]


const sum = arr.filter(n=> n%2===1).reduce((acc,curr)=> acc+curr, 0)

console.log(sum);




