// filter() -> Data ko select krne ke liye use hota hai, or condition ke basis pe element slect krta hai.

const nums = [1,2,3,4,5,6,7]
const even = nums.filter(n => n%2 ===0)
console.log(even);

const array = [1,2,3,4,5]
const odd = array.filter(n => n%2 ===1);
console.log(odd);


const users = [
    {name: "Sakshi", age: 25, active: true},
    {name: "Rahul", active: false}
]

const activeuser = users.filter(user=>user.active)
console.log(activeuser);
