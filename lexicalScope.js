let a = 10
function test(){
    console.log(a);
    
}
test()
//-------------------------------------------------------------

function outer(){
    let b = 30

    function inner(){
        console.log(b);
        
    }
    inner()
}
outer()
//----------------------------------------------------------

let c = 1;  // global executiobn context - memory creation - let c store in memeory with undefined, execution phase - c= 1; 
function first(){ // function first store in memory with its full defination

    let d = 2;   // first execution context will crete -> memory creation - let d store with undefined , execution phase - d = 2; 
    function second(){ // function second store in memory with its full defination, 

        let e = 3; // 2nd execution context will be created, let e store in memeory phase, and e= 2 in execution phase
        console.log(c,d,e);
        
    }
    second();
}
first(); 
//----------------------------------------------------------------------------------------------------------------------

function mohit(){
    let name = "mohit"

    function inner(){
        console.log(name)
    }
    inner()
}
mohit()
// lexical scope - inner function can access the variable of outer function. 