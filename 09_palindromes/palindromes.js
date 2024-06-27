const palindromes = function (inputRaw) {
	// Formats input
	input = inputRaw.toLowerCase().replace(/[\.,?!]/g, "").replace(/\s+/g, "");
	
	// Creates array for first half of characters
	let array = [];
	for (let i = 0; i < (input.length / 2); i++) {
		array.push(input.charAt(i));
	};

	// Flips array
	arrayRev = [...array];
	arrayRev.reverse();
	
	// Creates string out of array
	let arrayString = "";
	arrayRev.forEach((char) => {
		arrayString = arrayString.concat(char);
	});

	// Compares reversed half to second half of input string
	if ((input.slice(input.length / 2, input.length)) == arrayString) {
		return true;
	} else {
		return false;
	};
};

// Do not edit below this line
module.exports = palindromes;
