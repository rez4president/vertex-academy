 // Getting the sum of the arrays.
 // This is option 1
let nums = [1, 2, 3, 4];

let sum = nums[0] + nums[1] + nums[2] + nums[3];
console.log(sum);

// This is option 2

let sum = 0;
for(let i = 0; i < nums.length; i++) {
	sum = sum + nums[i];
}

console.log(sum);

let sum = 0;

nums.forEach(function(e, i, a) {
	sum = sum + e;
})
console.log(sum);