module.exports = function reverse (n) {
	return myReverse(n);
}

function myReverse(n) {
	if (n < 0) {
		n = 0 - n;
	}

	return recurseReverse(n)[0];
}

function recurseReverse(number, degree = 0) {
	if (number === 0) {
		return [number, 0];
	};
	var previousNumberAndDegree = recurseReverse(
		(number - number % 10) / 10,
	);
	var result = (number % 10 * 10 ** previousNumberAndDegree[1]) + previousNumberAndDegree[0]
	return [result, (previousNumberAndDegree[1] + 1)];
}
