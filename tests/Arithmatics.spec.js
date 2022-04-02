const chai = require("chai")
const should = chai.should()

const arithmatics = require("../functions/Arithmatics")

describe("Arithmetics Testing", () => {
    it("Should return 100 if firstnumber is 20 and secondnumber is 5", () => {
        arithmatics.multiplyOps(20, 5).should.equal(100)
    })

    it("Should return 88 if firstnumber is 66 and secondnumber is 22", () => {
        arithmatics.plusOps(66, 22).should.equal(88)
    })

    it("Should return 50 if firstnumber is 77 and secondnumber is 27", () => {
        arithmatics.minusOps(77, 27).should.equal(50)
    })

    it("Should return 25 if firstnumber is 100 and secondnumber is 4", () => {
        arithmatics.divideOps(100, 4).should.equal(25)
    })

    it("Should return 6 if firstnumber 20 and secondnumber is 7", () => {
        arithmatics.modulusOps(20, 7).should.equal(6)
    })
})