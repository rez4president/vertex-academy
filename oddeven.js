let array = [11, 9, 8, 6, 0, 0, 3]

let evenNumbers = 0;
let oddNumbers = 0;
let zeros = 0;

for(let i = 0; i < array.length; i++) {
	if(array[i] === 0) {
		zeros++;
	} else if(array[i] % 2 === 0) {
		evenNumbers++
	} else {
		oddNumbers++
	}
}

console.log('Even: ' + evenNumbers);
console.log('Zeros: ' + zeros);
console.log('Odd: ' + oddNumbers);
