// callbackhell kya hota hai... -> jab bhut sare function nested ho jate hain , usko callback hell kehte hain. 
// unreadable code, debugging difficulty, maintenance difficult 

// examplr--

setTimeout(() => {
    console.log("step 1");
    
    setTimeout(() => {
        console.log("step 2");
        

        setTimeout(() => {
            console.log("Step 3");
            
        }, 1000);
    }, 2000);
}, 3000);
// in nested sttimeout ..... next timer start only after previous callback execute  , 
// promice hota hai- solution of callback hell