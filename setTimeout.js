function helloFunc() {
	console.log("Hello");
}

function byeFunc() {
	console.log("Bye");
}


function greeting(func)  {
	func();
}

// greeting(helloFunc);



setTimeout(helloFunc, 2000)


let counter = 0;
let interval = setInterval(function() {
	counter++;
	if(counter === 10){
		clearInterval(interval);
	}
	console.log('Hello');
}, 1000);
