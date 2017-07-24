const Sumator = require('./sumator').Sumator;
const expect = require('./chai').expect;

describe('Unit Tests', function () {
    let myList;
    beforeEach(function () {
        myList = new Sumator();
    });

    describe('check if function exists', function () {
        it('check add exists', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('check sumNums exists', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        });
        it('check removeByFilter exists', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        });
        it('check toString exists', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
        });
    });

    describe('checks add function', function () {
        describe('check if add works correctly', function () {
            it('no input', function () {
                expect(myList.toString()).to.equal('(empty)')
            });

            it('add 3', function () {
                myList.add(3);
                expect(myList.toString()).to.equal('3');
            });

            it('add 3 and 8', function () {
                myList.add(3);
                myList.add(5);
                expect(myList.toString()).to.equal('3, 5');
            });

            it('add 3 and 8 and 1', function () {
                myList.add(3);
                myList.add(5);
                myList.add(1);
                expect(myList.toString()).to.equal('3, 5, 1');
            });
        });
    });

    describe('check sumNums function', function () {
        it('with string input should 0', function () {
            myList.add('hello');
            expect(myList.sumNums()).to.equal(0);
        });

        it('with 2 inputs', function () {
            myList.add(5);
            myList.add(6);
            expect(myList.sumNums()).to.equal(11);
        });

        it('with no input', function () {
            expect(myList.sumNums()).to.equal(0);
        });
    });

    describe('check removeByFilter function', function () {
        it('remove hello', function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.removeByFilter(x => x % 2 == 0);
            expect(myList.toString()).to.equal('1, 3');
        });

        it('remove nothing', function () {
            myList.add(1);
            myList.add(3);
            myList.add(3);
            myList.removeByFilter(x => x % 2 == 0);
            expect(myList.toString()).to.equal('1, 3, 3');
        });

        it('remove a word', function () {
            myList.add('hello');
            myList.add('happy');
            myList.add('world');
            myList.removeByFilter(x => x == ('happy'));
            expect(myList.toString()).to.equal('hello, world');
        })
    });

});