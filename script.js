
let arr = [-2, 16, 41, 21, 0, 6, -4];

let minValue = arr[0];
let maxValue = arr[0];
let minIndex = 0;
let maxIndex = 0;

for(let i = 1; i < arr.length; i++) {
	if(arr[i] < minValue) {
		minValue = arr[i];
		minIndex = i;
	} else if(arr[i] > maxValue) {
		maxValue = arr[i];
		maxIndex = i;
	}
}

console.log('Min: ' + minValue + '; index: ' + minIndex);
console.log('Max ' + maxValue + '; index: ' + maxIndex);