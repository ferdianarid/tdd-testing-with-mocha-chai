const chai = require("chai")
const should = chai.should()

const fizzbuzz = require('../functions/Fizzbuzz')

describe("FizzBuzz Testing", () => {
    it("Sshould return fizz when the parameter is 3", () => {
        fizzbuzz.Fizzbuzz(3).should.equal("fizz")
    })
    it("Should return buzz when the parameter is 5", () => {
        fizzbuzz.Fizzbuzz(5).should.equal("buzz")
    })
    it("Should return bizzbuzz when the parameter is 15", () => {
        fizzbuzz.Fizzbuzz(15).should.equal("fizzbuzz")
    })
})