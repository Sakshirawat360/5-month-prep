function majority(nums){
    const map = {}

    for(let num of nums){
        if(map[num]){
            map[num]++
        }
        else{
            map[num]=1
        }

        if(map[num]> nums.length/2){
            return num
        }
    }
    return "no majority element"
}
console.log(majority([1,1,1,1,2,3,3]));
// time complexity - O(n)
//Space Complexity - O(1)
