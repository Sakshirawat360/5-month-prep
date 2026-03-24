// Async code mai error handle krne ke liye Try Catch ka use hota hai.. 

function fetchdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let success = false // promise fail hoga,, 

            if(success){
                resolve("data recived");
            }
            else{
                reject("API error");
                
            }
        }, 2000);
    })
}

// fetchdata().then(result => console.log(result)).catch(error => console.log(error))

async function getData(){
    try {
        const a = await fetchdata()
        console.log(a);
        
    } catch (error) {
        console.log(error);
    }
}
getData()