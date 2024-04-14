const removeFromArray = function(arr, ...values) {
	let newArray = arr;	
	for (let i = 0; i < values.length; i++) {
		newArray = newArray.filter((item) => item != values[i]);
	};
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
