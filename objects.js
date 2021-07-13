let person = {
	name: "Daniel",
	age: 28,
	greeting: function(partOfDay) {
		if(partOfDay === 'morning') {
			console.log(`Good morning, my name is ${this.name}`);
		} else if(partOfDay === 'evening') {
			console.log(`Good evening, my name is ${this.name}`);
		} else {
			console.log(`Hello, my name is ${this.name}`)
		}
	}
}

person.greeting('evening');