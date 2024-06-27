const findTheOldest = function(people) {
	const oldest = people.sort((a, b) => {
		if (!("yearOfDeath" in b)) {
			b.yearOfDeath = new Date().getFullYear();
		};
		const prevPerson = a.yearOfDeath - a.yearOfBirth;
		const nextPerson = b.yearOfDeath - b.yearOfBirth;
		return prevPerson > nextPerson ? -1 : 1;
	})
	return oldest[0];
};


// Do not edit below this line
module.exports = findTheOldest;
