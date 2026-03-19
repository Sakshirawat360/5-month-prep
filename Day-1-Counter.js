function outer(){
    let count =0;
    return function inner(){
        count++;
        console.log(count);
        
    }
}
const count = outer();

count();
count();
count();
count();
count();