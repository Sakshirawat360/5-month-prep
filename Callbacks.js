function processData(data){
    console.log("processing.." + data);
    
}

function func(methodName){
    methodName("Sakshi")
}

function deleteData(data){
     console.log("deleting..." + data);
}

func(deleteData)

//---------------------------------------------------
//callback - kisi function ko dusre function mai as an argument pass kiya jata hai.. fir baad mai call kr lete hain use call back function kehte hain.

function greet(name, callback){
    console.log("hello" + " " + name);
    callback()
}

function saybye(){
    console.log("bye");
    
}
greet("Sakshi", saybye)

//---------------------------------------------------------------------------------------------
// Real life Example of Callbacks API Simulation

function fetchdata(call){
    console.log("prrocess data....");

    setTimeout(() => {
    console.log("Data fetch ho gaya hai");
    call();
}, 2000);
}


fetchdata(()=>{
    console.log("almost done");
    
})

// function fetchdata(){
//     console.log("processing data...");
    
//  return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("data received")
//     }, 2000);
//  })
// }
// fetchdata().then(result => console.log(result))

//---------------------------------------------------------------------------

function calculate(a,b, sum){
    console.log("calculating sum of a and b");
    

    setTimeout(() => {
        console.log("now i will show the result");
        sum(a,b)
    }, 3000);
}

function addvalues(a,b){
    console.log(a+b);
    
}

calculate(5, 6, addvalues)
//------------------------------------------------------------------

