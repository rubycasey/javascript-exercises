const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;	
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
	return arr.reduce((product, current) => product * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a == 0) {
		return 1;
	} else {
		let lastNumber = 0;
		let output = 0;
		for (let i = 1; i < a+1; i++) {
			if (lastNumber == 0) {
				lastNumber = 1;
			}			
			output = lastNumber * i;
			lastNumber = output;
		}
		return output;
	};
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
