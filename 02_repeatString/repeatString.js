const repeatString = function(string, count) {
	let outputString = "";
	if (count < 0) {
		return "ERROR";
	} else if (count == 0) {
		return "";
	}
	for (let i = 0; i < count; i++){
		outputString = outputString.concat(string);
	};
	return outputString;
};

// Do not edit below this line
module.exports = repeatString;
