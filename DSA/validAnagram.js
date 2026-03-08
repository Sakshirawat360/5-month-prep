function anagram(s,t){
if(s.length != t.length) return false
let final_s = s.split('').sort().join('')
let final_t = t.split('').sort().join('')
if(final_s === final_t) return true;
return false
}
console.log(anagram(s = "anagram", t = "gramana"))