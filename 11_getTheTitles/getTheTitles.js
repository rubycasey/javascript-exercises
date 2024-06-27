const getTheTitles = function(input) {
	let titles = [];
	input.forEach((book) => {
		titles.push(book.title);
	})
	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
