//Async await promise ko easy banane ka treeka hota hai,, .then() ki jagah pe hum await use krte hain. await sirf async function ke anadr use hota hai.  

function fetchdata(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("Success")
        }, 2000);
    })
}
// fetchdata().then(result => console.log(result));


async function getData(){

console.log("process start");

const result = await fetchdata()

console.log(result);
console.log("end");

}
getData()

//-----------------------------------------------------------------------

function api1(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("API1 DONE");
            resolve()
        }, 2000);
    })
}
function api2(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("API2 DONE");
            resolve()
        }, 3000);
    })
}
function api3(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("API3 DONE");
            resolve()
        }, 4000);
    })
}

// api1().then(api2).then(api3)

async function getdata(){

    console.log("process start");
    
     const a = await api1()
     const b = await api2()
     const c = await api3()

    console.log("process end");
    
}

getdata()