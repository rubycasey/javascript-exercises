const sumAll = function(one, two) {
	// Checks if inputs are numbers
	if (typeof one != "number" || typeof two != "number") {
		return "ERROR";
	};

	// Sets largest first
	if (two > one) {
		larger = two;
		smaller = one;
	} else {
		larger = one;
		smaller = two;
	};

	let newSum = smaller;
	// Checks if positive
	if (Math.sign(one + two) == 1) {
		let positive = true;
		for (let i = smaller + 1; i < larger + 1; i++) {
			newSum += i;
		};
	} else {
		return "ERROR";
	};
	return newSum;
	
};

// Do not edit below this line
module.exports = sumAll;
