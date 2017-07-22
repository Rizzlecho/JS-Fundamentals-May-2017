const createList = require('./list-add-swap-shift-left-right').createList;
const expect = require('./chai').expect;


describe('Unit testing', function () {
    let myList = createList();
    beforeEach(function () {
        myList = createList();
    });

    describe('check add', function () {
        it('no input', function () {
            expect(myList.toString()).to.equal('');
        });

        it('string input', function () {
            myList.add('pesho');
            expect(myList.toString()).to.equal('pesho');
        });

    });

    describe('check shiftLeft', function () {
        it('shiftLeft with no items',function () {
            myList.shiftLeft();
            expect(myList.toString()).to.equal('');
        });

        it('shiftLeft with one item',function () {
            myList.add('pesho');
            myList.shiftLeft();
            expect(myList.toString()).to.equal('pesho');
        });

        it('shiftLeft with several items',function () {
            myList.add('pesho');
            myList.add('gosho');
            myList.add('kiro');
            myList.shiftLeft();
            expect(myList.toString()).to.equal('gosho, kiro, pesho');
        });

        it('shiftLeft with several items',function () {
            myList.add('pesho');
            myList.add(1);
            myList.add('kiro');
            myList.shiftLeft();
            myList.shiftLeft();
            expect(myList.toString()).to.equal('kiro, pesho, 1');
        });
    });

    describe('check shiftRight', function () {
        it('shiftRight with no items',function () {
            myList.shiftRight();
            expect(myList.toString()).to.equal('');
        });

        it('shiftRight with one item',function () {
            myList.add('pesho');
            myList.shiftRight();
            expect(myList.toString()).to.equal('pesho');
        });

        it('shiftRight with several items',function () {
            myList.add('pesho');
            myList.add('gosho');
            myList.add('kiro');
            myList.shiftRight();
            expect(myList.toString()).to.equal('kiro, pesho, gosho');
        });

        it('shiftRight with several items',function () {
            myList.add('pesho');
            myList.add(1);
            myList.add('kiro');
            myList.shiftRight();
            myList.shiftRight();
            expect(myList.toString()).to.equal('1, kiro, pesho');
        });
    });

    describe('check swap', function () {
        describe('swap should return false', function () {
            it('with no indexes', function () {
                expect(myList.swap('')).to.be.equal(false);
            });

            it('with one index', function () {
                myList.add('pesho');
                myList.add('gosho');
                expect(myList.swap(1)).to.be.equal(false);
            });

            it('with one negative index', function () {
                myList.add('pesho');
                myList.add('gosho');
                expect(myList.swap(-1)).to.be.equal(false);
            });

            it('with two negative indexes', function () {
                myList.add('pesho');
                myList.add('gosho');
                expect(myList.swap(-1, -2)).to.be.equal(false);
            });

            it('with first negative index', function () {
                myList.add('pesho');
                myList.add('gosho');
                expect(myList.swap(-1, 2)).to.be.equal(false);
            });

            it('with second negative index', function () {
                myList.add('pesho');
                myList.add('gosho');
                expect(myList.swap(2, -2)).to.be.equal(false);
            });

            it('with two equal indexes', function () {
                myList.add('pesho');
                myList.add('gosho');
                expect(myList.swap(2, 2)).to.be.equal(false);
            });

            it('with two strings indexes', function () {
                myList.add('pesho');
                myList.add('gosho');
                expect(myList.swap('one', 'two')).to.be.equal(false);
            });

            it('with first bigger than data length index', function () {
                myList.add('pesho');
                myList.add('gosho');
                myList.add('hello');
                expect(myList.swap(4, 1)).to.be.equal(false);
            });

            it('with second bigger than data length index', function () {
                myList.add('pesho');
                myList.add('gosho');
                myList.add('hello');
                expect(myList.swap(1, 7)).to.be.equal(false);
            });

            it('with both bigger than data length index', function () {
                myList.add('pesho');
                myList.add('gosho');
                myList.add('hello');
                expect(myList.swap(6, 6)).to.be.equal(false);
            });
        });

    })
});
