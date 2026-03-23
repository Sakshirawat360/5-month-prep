//destructuring - object ya array mai se variable ko extract krta hai.

const user = {
    name: "Sakshi",
    age: 25,
    city:"jabalpur"
}

// if we will not use destructuring here,,, 
const name = user.name;
console.log(name);

// but if we will use destructuring

const{age,city} = user;
console.log(age);
console.log(city);
// object destructuring mai.. variable ka name or object key ka name same hona chahiye

const{name: username}= user
console.log(username);

// this is array destructuring 
const nums = [10, 20, 30, 40, 50]

const a = nums[0]
console.log(a);

const[, b,c,d,e] = nums
console.log(b,c,d,e);






