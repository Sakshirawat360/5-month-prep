function counter(){
    let count  =0;

    return function(){
        count++;
        console.log(count);
        
    }
}
let c = counter();

c();
c();

function sumit(){
    let count =0;

    return function (){
        count++;
        console.log(count);
        
    }
}
const count = sumit();

count();
count();
count();
count();
count();