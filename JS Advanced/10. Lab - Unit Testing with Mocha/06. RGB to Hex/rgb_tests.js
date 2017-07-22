const rgbToHexColor = require('./rgb').rgbToHexColor;
const expect = require('../chai').expect;

describe('RGB to Hex Color', () => {
    it('should return #FF9EAA for (255, 158, 170)', () => {
        expect(rgbToHexColor(255, 158, 170)).to.contains('#FF9EAA');
    });

    it('should pad values with zeroes', () => {
        expect(rgbToHexColor(12, 13, 14)).to.contains('#0C0D0E');
    });

    it('should work at lower limit', () => {
        expect(rgbToHexColor(0, 0, 0)).to.contains('#000000');
    });

    it('should work at upper limit', () => {
        expect(rgbToHexColor(255, 255, 255)).to.contains('#FFFFFF');
    });

    it('should return undefined for negative values', () => {
        expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
    });

    it('should return undefined for values greater than 255', () => {
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    });

    it('should return undefined for values greater than 255', () => {
        expect(rgbToHexColor(15, 15, 256)).to.be.undefined;
    });

    it('should return undefined for fractions', () => {
        expect(rgbToHexColor(3.14, 2.71, 3.14)).to.be.undefined;
    });

    it('should return undefined for non numbers', () => {
        expect(rgbToHexColor('pesho', {name: 'gosho'}, [])).to.be.undefined;
    });
});


