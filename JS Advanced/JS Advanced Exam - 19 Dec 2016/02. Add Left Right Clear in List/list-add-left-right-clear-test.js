const makeList = require('./list-add-left-right-clear').makeList;
const expect = require('./chai').expect;

describe('Unit testing', function () {

    beforeEach(function () {
        myList = makeList();
    });

    describe('check if function', function () {
        it('check addLeft exists', function () {
            expect(typeof myList.addLeft).to.equal('function');
        });

        it('check addRight exists', function () {
            expect(typeof myList.addRight).to.equal('function');
        });

        it('check clear exists', function () {
            expect(typeof myList.clear).to.equal('function');
        });

        it('check toString exists', function () {
            expect(typeof myList.toString).to.equal('function');
        });
    });

    describe('checks addLeft', function () {
        it('no input', function () {
            it('addLeft with no items',function () {
                myList.addLeft();
                expect(myList.toString()).to.equal('');
            });

            it('addLeft with one item',function () {
                myList.addLeft('pesho');
                expect(myList.toString()).to.equal('pesho');
            });

            it('addLeft with several items',function () {
                myList.addLeft('pesho');
                myList.addLeft('gosho');
                myList.addLeft('kiro');
                expect(myList.toString()).to.equal('kiro, pesho, gosho');
            });

            it('addLeft with several items',function () {
                myList.addLeft('pesho');
                myList.addLeft(1);
                myList.addLeft('kiro');
                expect(myList.toString()).to.equal('1, kiro, pesho');
            });
        })
    });

    describe('checks addRight', function () {
        it('addRight with no items',function () {
            myList.addRight();
            expect(myList.toString()).to.equal('');
        });

        it('addRight with one item',function () {
            myList.addRight('pesho');
            expect(myList.toString()).to.equal('pesho');
        });

        it('addRight with several items',function () {
            myList.addRight('pesho');
            myList.addRight('gosho');
            myList.addRight('kiro');
            expect(myList.toString()).to.equal('pesho, gosho, kiro');
        });

        it('addRight with several items',function () {
            myList.addRight('pesho');
            myList.addRight(1);
            myList.addRight('kiro');
            expect(myList.toString()).to.equal('pesho, 1, kiro');
        });

        it('addRight with several items',function () {
            myList.addRight(2);
            myList.addRight(1);
            myList.addRight(3);
            expect(myList.toString()).to.equal('2, 1, 3');
        });

        it('addRight and addLeft with several items',function () {
            myList.addRight('pesho');
            myList.addLeft(1);
            expect(myList.toString()).to.equal('1, pesho');
        });
    });

    describe('checks clear', function () {
        it('clear with no items',function () {
            myList.clear();
            expect(myList.toString()).to.equal('');
        });

        it('addRight with several items',function () {
            myList.addRight('pesho');
            myList.addLeft(1);
            myList.addRight('kiro');
            myList.clear();
            expect(myList.toString()).to.equal('');
        });

        it('addRight with several items',function () {
            myList.addRight('pesho');
            myList.addLeft(1);
            myList.clear();
            myList.addRight('kiro');

            expect(myList.toString()).to.equal('kiro');
        });
    });
});