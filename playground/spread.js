// function add(a, b) {
// 	return a + b;
// }
// console.log(add(3, 1));

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
	console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);
