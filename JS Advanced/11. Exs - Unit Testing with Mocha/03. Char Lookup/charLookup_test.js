const lookupChar = require('./charLookup').lookupChar;
const expect = require('../chai').expect;


describe('lookupChar', function () {
    it('with a non-string first parameter, should return undefined', function () {
        expect(lookupChar(13,0)).to.equal(undefined, 'Function did not return the correct result!')
    });

    it('with a non-string first parameter, should return undefined', function () {
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined, 'Function did not return the correct result!')
    });

    it('with a floating point number first parameter, should return undefined', function () {
        expect(lookupChar(3.12)).to.equal(undefined, 'Function did not return the correct message!')
    });

    it('with a incorrect index value, should return incorrect index', function () {
        expect(lookupChar('gosho', 13)).to.equal('Incorrect index', 'Function did not return the correct value!')
    });

    it('with a negative index value, should return incorrect index', function () {
        expect(lookupChar('stamat', -1)).to.equal('Incorrect index', 'Function did not return the correct value!')
    });

    it('with an index value equal to string length, should return incorrect index', function () {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index', 'Function did not return the correct value!')
    });

    it('with correct parameter, should return correct value', function () {
        expect(lookupChar('pesho', 0)).to.equal('p', 'Function did not return the correct result!')
    });

    it('with correct parameter, should return correct value', function () {
        expect(lookupChar('stamat', 3)).to.equal('m', 'Function did not return the correct result!')
    });
});