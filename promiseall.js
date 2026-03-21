//promise.all kab use hota hai...jab multiple promises ek sath run krni hoti hain, tab use use hota hai..


function fetch1(){
return new Promise(resolve =>{
    setTimeout(() => {
        console.log("Data 1");
        resolve("Data1 completed")
    }, 1000);
})
}
function fetch2(){
return new Promise(resolve =>{
    setTimeout(() => {
        console.log("Data 2");
        resolve("Data2 completed")
    }, 1000);
})
}
function fetch3(){
return new Promise(resolve =>{
    setTimeout(() => {
        console.log("Data 3");
        resolve("Data3 completed")
    }, 1000);
})
}

Promise.all([fetch1(), fetch2(), fetch3()]).then(results => console.log(results));


