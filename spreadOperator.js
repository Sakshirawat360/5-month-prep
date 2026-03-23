//spreadoperator- iska kaam array ko copy krna hota hai ... 

const arr1 = [1,2,3]
const arr2 = [...arr1] // copy of arr1... 
//merge array
arr2.push(4)
const merge = [...arr1,...arr2]


console.log(arr2);
console.log(merge);


//----------------------------------------------------------

const user = {name: "Sakshi Rawat"}
const updated = {...user, age: 25}
const final = {...updated, city: "jabalpur"}

console.log(final);



