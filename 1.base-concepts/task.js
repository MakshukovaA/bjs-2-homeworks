"use strict"

function solveEquation(a, b, c) {
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		let root = -b / (2 * a);
		return [root];
	} else {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	}
}
console.log (solveEquation(1, -3, 2));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthPayment = loanBody * (monthPercent + (monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1)));
  let totalPayment = monthPayment * countMonths;
  return Math.round(totalPayment * 100) / 100;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));

