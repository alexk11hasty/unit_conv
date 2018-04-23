// Converts metric and other units
//Temperature
const unitsConverter = () => {
	const cToF = degC => degC * 9 /  5 + 32;
	const cTok = degC => degC + 273;
	const cToN = degC => degC * 0.33;


	return {
		cToF,
		cTok,
		cToN,
	}
};


module.exports = unitsConverter;