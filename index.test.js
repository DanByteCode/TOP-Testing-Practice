const main = require('./index')
//1. A capitalize function that takes a string and returns it with the first character capitalized.
const capitalize = main.capitalize
describe("1. Capitalize test:", () => {
    test("Find the first capitalize", () => {
        expect(capitalize("Hello test")).toBe("H")
    })
    test("The word is in midle", () => {
        expect(capitalize("hello Test")).toBe("T")
    })
    test("No capital in the string", () => {
        expect(capitalize("hello test")).toBe("")
    })
    test("Invalid string: number", () => {
        expect(capitalize(123)).toBe("")
    })
})

//2. A reverseString function that takes a string and returns it reversed.
const reversed = main.reversed
describe("2. Reverse String:", () => {
    test("Reverse word", () => {
        expect(reversed("string")).toBe("gnirts")
    })
    test("Reverse phrase", () => {
        expect(reversed("test string")).toBe("gnirts tset")
    })
})

//3. A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. 
const calculator = main.calculator
describe("3. Calculator:", () => {
    test("Add 2 numbers", () => {
        expect(calculator.add(2, 3)).toBe(5)
    })
    test("Subtract 2 numbers", () => {
        expect(calculator.subtract(5, 3)).toBe(2)
    })
    test("Muliply 2 numbers", () => {
        expect(calculator.multiply(4, 3)).toBe(12)
    })
    test("Divide 2 numbers", () => {
        expect(calculator.divide(15, 5)).toBe(3)
    })
    test("Divide with subtracting 0", () => {
        expect(calculator.divide(15, 0)).toBeUndefined()
    })
})

//4. A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
const caesarCipher = main.caesarCipher
describe("4. Caesar Cipher:", () => {
    test("Single letter", () => {
        expect(caesarCipher("A", 1)).toBe("B");
    })
    test("Word", () => {
        expect(caesarCipher("Test", 1)).toBe("Uftu");
    })
    test("Phrase", () => {
        expect(caesarCipher("Test string", 3)).toBe("Whvw vwulqj");
    })
    test("Negative shift", () => {
        expect(caesarCipher("Test string", -5)).toBe("Ozno nomdib");
    })
    test("Wrap", () => {
        expect(caesarCipher("z", 1)).toBe("a");
    })
})

//5. An analyzeArray function that takes an array of numbers and returns an object 
// with the following properties: average, min, max, and length.
const analyzeArray = main.analyzeArray
describe("5. Analyze Array:", () => {
    test("Analyze 1", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
    })
    test("Analyze 2", () => {
        expect(analyzeArray([-10, 0, 30, 5, -100])).toEqual({
            average: -15,
            min: -100,
            max: 30,
            length: 5
        })
    })
})