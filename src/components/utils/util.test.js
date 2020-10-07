const { getIp, getCountry } = require('./util');

test('should return an IP Address', async () => {
	let address = await getIp();
	expect(typeof address).toBe('string');
});

test(
	'should return a Country',
	async () => {
		let country = await getCountry();
		expect(typeof country).toBe('string');
	},
	30000
);
