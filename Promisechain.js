// promise chaining - > iska matlb hota hai ,, 1 promise run hone ke baad dusra promise run hota hai,, isko promise chaining bolte hain. 
// example - API1 -> API2 -> API3


function api1(){
 return new Promise(resolve =>{
    setTimeout(() => {
        console.log("API1 DONE");
        resolve()
    }, 1000);
 });
}

function api2(){
 return new Promise(resolve =>{
    setTimeout(() => {
        console.log("API2 DONE");
        resolve()
    }, 1000);
 });
}

function api3(){
 return new Promise(resolve =>{
    setTimeout(() => {
        console.log("API3 DONE");
        resolve()
    }, 1000);
 });
}

api1().then(api2).then(api3)

