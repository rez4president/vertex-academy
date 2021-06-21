let array = ['John', 'Jacob', 'Daniel', 'Linda', 'Nancy', 'John'];

let name = prompt('Enter a name', 'John');

let counter = 0;

for(let i = 0; i < array.length; i++) {
    if(array[i] === name) {
    	counter++;
    }
}

if(counter === 1) {
	console.log('Name ' + name + ': ' + counter + ' time');
} else {
	console.log('Name ' + name + ': ' + counter + ' times');
}