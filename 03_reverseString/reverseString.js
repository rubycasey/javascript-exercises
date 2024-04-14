const reverseString = function(string) {
	let stringSplit = [];
	let stringConcat = "";
	for (let i = 0; i < string.length; i++) {
		// splits each letter into it's own array index
		stringSplit.push(string[i]);
	};
	for (let i = string.length - 1; i > -1; i--) {
		// reassembles split array into reversed string
		stringConcat = stringConcat.concat(stringSplit[i]);
	}
	return stringConcat;
};

// Do not edit below this line
module.exports = reverseString;
