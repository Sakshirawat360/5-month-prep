//promice - future value, 
// mtlb - abhi value nhi hai hai , lekin future mai milegii-  exmple - api calls

const myPromise = new Promise((resolve, reject)=>{
let success = true

if(success){
    resolve("Data Received");
    
}
else{
    reject("error occured")
}
});

myPromise.then(result => console.log(result)).catch(error => console.log(error));
//-----------------------------------------------------------------------------------------------------------------------

const mycal = new Promise((resolve, reject) => {
    let sum = 3;

    if(sum>5){
        console.log("true");
        
    }
    else{
        console.log("false");
        
    }
})

mycal.then(result => console.log(result)).catch(error =>console.log(error));