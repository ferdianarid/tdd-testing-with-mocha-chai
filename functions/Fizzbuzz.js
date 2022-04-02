module.exports = {
    Fizzbuzz: (number) => {
        if (number == 3) {
            return "fizz"
        }
        if (number == 5) {
            return "buzz"
        }
        if (number % 15 == 0) {
            return "fizzbuzz"
        }
    }
}