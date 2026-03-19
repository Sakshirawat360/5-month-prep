function memo(fn){
    const cache = {}

    return function(n){
        if(cache[n]){
            console.log("from cache");
            return cache[n]
        }

        console.log("calculating...");
        const result = fn(n)
        cache[n] = result
        return result
    }

}

function square(n){
    return n*n
}
const memosquare = memo(square)

console.log(memosquare(5));
console.log(memosquare(5));
console.log(memosquare(5));
