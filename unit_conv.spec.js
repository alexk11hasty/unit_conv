// import code to be tested
const unitsConverter = require('./unit_converter');

let uc = unitsConverter();

//smoke test
describe ("smoke test", () => {
	it("can blow smoke",() => {
		expect(true).toBe(true);
	});
});

//specify what the code does
describe("unit converter", () => {
	it("can convert temperatures", () => {
		expect(uc.cToF(0)).toBe(32);
		expect(uc.cTok(0)).toBe(273);
		expect(uc.cToN(0)).toBe(0);		
	});
	
});
