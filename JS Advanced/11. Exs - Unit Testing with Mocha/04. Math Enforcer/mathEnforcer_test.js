const mathEnforcer = require('./mathEnforcer').mathEnforcer;
const expect = require('../chai').expect;

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined);
        });

        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(4)).to.equal(9);
            expect(mathEnforcer.addFive(-2)).to.equal(3);
            expect(mathEnforcer.addFive(3.14)).to.closeTo(8.14, 0.01);
            expect(mathEnforcer.addFive(-3.5)).to.be.closeTo(1.5, 0.01);

        });
    });

    describe('subtractTen', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined);
        });

        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
        });
    });

    describe('sum', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.sum('pesho', 'gosho')).to.equal(undefined);
            expect(mathEnforcer.sum('pesho', 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, 'ivan')).to.equal(undefined);
        });

        it('with two number parameters, should return correct result', function () {
            expect(mathEnforcer.sum(10, 20)).to.equal(30);
            expect(mathEnforcer.sum(-10, -20)).to.equal(-30);
            expect(mathEnforcer.sum(1.5, 20.5)).to.be.closeTo(22, 0.01);
            expect(mathEnforcer.sum(-2.5, -10.5)).to.be.closeTo(-13, 0.01);
        });
    });
});