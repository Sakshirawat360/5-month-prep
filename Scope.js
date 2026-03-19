let a = 20;
function test(){
    console.log(a);
    
}
console.log(a);

test()
// if a variable declare outside of the function , is called global scope.
// in global scope, variable can be accessible both inside and outside of the function. 
//--------------------------------------------------------------------------------------
function sakshi(){
    var b = 30
    var c = 50
    console.log(b);
    console.log(c);
    
    
}

sakshi()
// function scope - agar koi variable function ke andar declare hota hai , toh us variable ko us fuction ke anadr hi access kr sakte hain , kuki bahar vo variable exist nhi krta hai.

// now try to access the variable outside of the function.
// console.log(c); // reference error - c is not defined. kuki c function ke anadr declare hai , hum usko bahar access nhi kr sakte.

//----------------------------------------------------------------------------------------

function me(){
    let d = 20
    console.log(d);
    
}
me()
// console.log(d); // reference error - d is not defined 
//----------------------------------------------------------------------------------

{
    let e =10;
    const f = 15;
}
// console.log(e);
// console.log(f);
// ---------------------------------------------------------------------------


var g = 20
{
    var g = 10
}
console.log(g);
// ------------------------------------------------------------------------

var h = 5
function sak(){
    h = 10
}
sak()

console.log(h);

// agar function ke anadr var a declare hua hai. to vo new local variable hoga, 
// agar function ke anadr a ki value di gayi toh global scope update ho jaiga
//.............................................................................


var g = 10
var g = 20
console.log(g)
// var - function scope hota hai,, isliye redeclare mai error nhi deta hai.. or reassigned bhi ho jata hai.. isliye second g ko redeclare krke reassign kiya or print ho gaya. 

if(true){
    let f = 20
    console.log(f)
    // because let block scope hota hai.. or hum isko scope ke andar hi access kr Sakte hain.. nahar nhi/
}

//interview trick..
if(true){
    var h = 20
}
console.log(h); // ye access ho jaiga kuki var function scope hota hai--- mtlb it can be accessable outside the function , 


if(true){
    let a = 10
    var b = 20
}
console.log(a); // output - reference error - becauas let ha block scope can not access outside the function.
console.log(b);// output - 20, 

