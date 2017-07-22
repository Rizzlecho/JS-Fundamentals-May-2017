const SortedList = require('./sortedList').SortedList;
const expect = require('./chai').expect;

describe('Unit testing', function () {

    let myList;
    beforeEach(function () {
        myList = new SortedList();
    });

    describe('check if function exists', function () {
        it('check add exists', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('check remove exists', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it('check size exists', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
    });

    describe('check if add works correctly', function () {
        it('add 3', function () {
            myList.add(3);
            expect(myList.list.join(', ')).to.equal('3');
        });

        it('add 3 and 8', function () {
            myList.add(3);
            myList.add(5);
            expect(myList.list.join(', ')).to.equal('3, 5');
        });

        it('add 3 and 8 and 1', function () {
            myList.add(3);
            myList.add(5);
            myList.add(1);
            expect(myList.list.join(', ')).to.equal('1, 3, 5');
        });
    });

    describe('check if remove works correctly', function () {
        it('remove 3', function () {
            myList.add(3);
            myList.add(2);
            myList.add(5);
            myList.remove(1);
            expect(myList.list.join(', ')).to.equal('2, 5');
        });

        it('remove from empty list', function () {
            expect(() => myList.remove()).throw(Error, 'Collection is empty.');
        });

        it('remove out of boundary', function () {
            myList.add(2);
            myList.add(1);
            myList.add(8);
            expect(() => myList.remove(3)).throw(Error, 'Index was outside the bounds of the collection.');
        });

        it('remove with negative', function () {
            myList.add(4);
            myList.add(2);
            myList.add(5);
            expect(() => myList.remove(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });

    });

    describe('check if get works correctly', function () {
        it('add 3 get 1', function () {
            myList.add(3);
            expect(myList.get(0)).to.equal(3);
        });

        it('remove from empty list', function () {
            expect(() => myList.get(0)).throw(Error, 'Collection is empty.');
        });

        it('remove out of boundary', function () {
            myList.add(2);
            myList.add(1);
            myList.add(8);
            expect(() => myList.get(3)).throw(Error, 'Index was outside the bounds of the collection.');
        });

        it('remove with negative', function () {
            myList.add(4);
            myList.add(2);
            myList.add(5);
            expect(() => myList.get(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });

    });

    describe('check if size works correctly', function () {
        it('add 3 size 1', function () {
            myList.add(3);
            expect(myList.size).to.equal(1);
        });
    })
});
