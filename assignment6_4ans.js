let findMaxLength = function(nums) {
    let result = 0;
let count = -1
let map = new Map();
map.set(-1, 0);
for(let i = 0; i<nums.length; i++){
    count += nums[i] === 0 ? -1 : 1;
    if(map.has(count)){
        result  = Math.max(result, i + 1 - map.get(count));
    } else {
        map.set(count, i + 1);
    }
}
return result;

};