function containsDuplicate(nums){
let set = new Set()
for(let num of nums){
    if(set.has(num)){
        return true;
    }
    set.add(num)
}
return false;
}
 console.log(containsDuplicate([1,2,3,4,5]))  // time complexity - O(n) because of one loop and set takes 0(1) time complexity
 // space complexity - set takes n space complexity , it create extra memory. 