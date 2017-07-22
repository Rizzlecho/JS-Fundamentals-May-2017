describe("Testing List add-shiftleft-shiftright-swap", function () {
    let myList = createList();
    beforeEach(function () {
        myList = createList();
    });

    describe("Test Swapping Elements", function () {

        it("index1 string return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap('pesho', 1);
            expect(result).to.be.equal(false);
        });


        it("index1 < 0 return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(-3, 1);
            expect(result).to.be.equal(false);
        });


        it("index1 == data.length return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(2, 1);
            expect(result).to.be.equal(false);
        });


        it("index1 > data.length return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(7, 1);
            expect(result).to.be.equal(false);
        });


        it("index1 == index2 return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, 1);
            expect(result).to.be.equal(false);
        });

        //################################################################################

        it("index1 string return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, 'pesho');
            expect(result).to.be.equal(false);
        });


        it("index1 < 0 return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, -1);
            expect(result).to.be.equal(false);
        });


        it("index1 == data.length return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, 2);
            expect(result).to.be.equal(false);
        });


        it("index1 > data.length return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, 7);
            expect(result).to.be.equal(false);
        });


        //################################################################################

        it("index1 == index2 return false", function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, 1);
            expect(result).to.be.equal(false);
        });

    });


});