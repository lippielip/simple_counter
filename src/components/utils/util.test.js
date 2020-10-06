const { getData } = require('./util');

test('should get Value greater than 0 from Firebase', () => {
	let number = getData();
	expect(number).toBeGreaterThan(0);
});
