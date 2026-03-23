// reduce() -> array ko single value mai convert krne ke liye hum reduce use krte hai.. 

const nums = [1,2,3,4]

const sum = nums.reduce((acc, curr)=> acc+curr, 0)
console.log(sum);
// initial acc val = 0, curr value =1, steps, = 0+1 = 1, 
// acc = 1, curr = 2 , acc+ currr => 1+2 = 3
//acc = 3, curr = 3, 3+3 = 6,
//acc = 6, curr = 4, 6+ 4 = 10, 

// hence iska answer hoga 10, 

//---------------------------------------------------------

const people = [
    {person : "A", age: 20},
     {person : "B", age: 20},
      {person : "C", age: 25}
]

const result = people.reduce((acc, person)=>{
 if(!acc[person.age]){
    acc[person.age]=[];
 }
 acc[person.age].push(person);
 return acc
},{})

console.log(result);
