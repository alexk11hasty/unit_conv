// import code to be tested
const celsius = require('./unit converter');

//smoke test
describe ("smoke test", () => {
	it("can blow smoke",() => {
		expect(true).toBe(true);
	});
});

//specify what the code does
describe("unit converter", () => {
	expect(Newton(0,0)).toBe(0);
	expect(celsius(0,0)).toBe(0);
	expect(fahrenheit(0,0)).toBe(32);
	expect(kelvin(0,0)).toBe(0);
});
