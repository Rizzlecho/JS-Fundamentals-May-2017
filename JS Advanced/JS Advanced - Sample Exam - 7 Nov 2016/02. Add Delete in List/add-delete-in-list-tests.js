const list = require('./add-delete-in-list').list;
const expect = require('./chai').expect;

describe('Unit testing', function () {

    let list;
    beforeEach(function () {
        list = (function () {
            let data = [];
            return {
                add: function (item) {
                    data.push(item);
                },
                delete: function (index) {
                    if (Number.isInteger(index) && index >= 0 && index < data.length) {
                        return data.splice(index, 1)[0];
                    } else {
                        return undefined;
                    }
                },
                toString: function () {
                    return data.join(", ");
                }
            };
        })();

    });

    describe('check function exists', function () {
        it('check add exists', function () {
            expect(typeof list.add).to.equal('function');
        });

        it('check delete exists', function () {
            expect(typeof list.delete).to.equal('function');
        });

        it('check toString exists', function () {
            expect(typeof list.toString).to.equal('function');
        });
    });

    describe('check if add works correctly', function () {
        it('add hello', function () {
            list.add('hello');
            list.add('world');
            expect(list.toString()).to.equal('hello, world');
        });

        it('add no input', function () {
            expect(list.toString()).to.equal('');
        });

        it('add negative numbers', function () {
            list.add(-2);
            expect(list.toString()).to.equal('-2');
        });
    });

    describe('check if delete works correctly', function () {
        it('add hello', function () {
            list.add('hello');
            list.add('world');
            list.delete(0);
            expect(list.toString()).to.equal('world');
        });

        it('add hello world chair', function () {
            list.add('hello');
            list.add('world');
            list.delete(0);
            list.add('chair');
            expect(list.toString()).to.equal('world, chair');
        });

        it('negative', function () {
            list.delete(-1);
            expect(list.toString()).to.equal('');
        });
    })
});
