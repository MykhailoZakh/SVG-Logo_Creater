const Shape = require("./shapes");
// test function to test shape output 
// circle test
describe('Shapes', () =>{
    describe("Circle", () => {
        it(`should take circle value and print circle`, () => {
            const shape = new Shape[0]('text', 'white', 'green');
            expect(shape.shape).toEqual(`<circle cx="150" cy="100" r="80" fill="green"/>`)
        })
    })
})

// triangle test
describe('Shapes', () =>{
    describe("Triangle", () => {
        it(`should take triangle values and print triangle`, () => {
            const shape = new Shape[1]('text', 'white', 'green');
            expect(shape.shape).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="green" />`)
        })
    })
})

// square test
describe('Shapes', () =>{
    describe("Square", () => {
        it(`should take square value and print square`, () => {
            const shape = new Shape[2]('text', 'white', 'green');
            expect(shape.shape).toEqual(`<rect x="70" y="30" width="160" height="160"  fill="green" />`)
        })
    })
})