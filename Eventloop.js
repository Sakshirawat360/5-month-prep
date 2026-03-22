// Event loop kense run karta hai.. -> event loop is a mechanism of java script, that handle Async code and ensure callback execute only when callstack is empty. 
// callstack  -> web api(async operation apne timer ke complete hone ka wait krte hai) -> task queue(timer complete hone ke baad task queue mai chle jate hain)-> fir eventloop check krta hai agar callstack empty hai to task queue se ek operationn uthake callstck mai daal deta hai.)

// console.log("start");

// setTimeout(() => {
//     console.log("kense ho");
    
// }, 2000);


// function fetchdata(){
//     return new Promise(resolve =>{
//         resolve("mai toh thik?")
//     })
// }
// fetchdata().then(result=> console.log(result))

// console.log("all done");

//-----------------------------------------------------------------------------------
function counter(){
    console.log("hiiiii");

    setTimeout(() => {
        console.log("where are you from?");
        
    }, 3000);

    function sakshi(){
        return new Promise(resolve =>{
            resolve("im gud wbu")
        })
    }
    sakshi().then(result => console.log(result))
    

    setTimeout(() => {
        console.log("i am from jabalpur mp")
        
    }, 5000)

    console.log("how are you")
    
}

counter()
