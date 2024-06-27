const fibonacci = function(n) {
	let input = Number(n);
	if (input == 0) {
		return 0;
	} else if (input < 0) {
		return "OOPS";
	};
	let lastNumber = 1;
	let secondLastNumber = 0;
	let currentNumber = 1;
	for (let i = 1; i < input; i++) {
		currentNumber = secondLastNumber + lastNumber
		secondLastNumber = lastNumber;
		lastNumber = currentNumber;
	};
	return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
