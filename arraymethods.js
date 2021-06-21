

let year = ['Jan', 'Feb', 'Mar']

console.log(year[2]);

year[2] = 'March';

console.log(year[2])


let months = ['feb', 'mar', 'apr', 'may'];

console.log(months.length);

months.push('jun');
console.log(months);

months.unshift('jan');
console.log(months);

months.pop()
console.log(months);

months.shift();
console.log(months);

console.log(months.indexOf('apr'));

months.splice(2,1);
console.log(months);

months.push('jun', 'july', 'aug');
console.log(months);

let months2 = months.slice();
console.log(months2);
months2.splice(2);
console.log(months2);
