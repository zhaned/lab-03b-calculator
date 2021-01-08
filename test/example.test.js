// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addition, subtraction, multiply, division } from '../utils.js';
const test = QUnit.test;

test('returns 6 using 2 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(2, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns 425 using 157 and 268', (expect) => {
    const expected = 425;
    const actual = addition(157, 268);

    expect.equal(actual, expected);
});

test('returns 5 using 14 and 9', (expect) => {
    const expected = 5;
    const actual = subtraction(14, 9);

    expect.equal(actual, expected);
});

test('returns -53 using 135 and 188', (expect) => {
    const expected = -53;
    const actual = subtraction(135, 188);

    expect.equal(actual, expected);
});

test('returns 24 using 8 and 3', (expect) => {
    const expected = 24;
    const actual = multiply(8, 3);

    expect.equal(actual, expected);
});

test('returns 864 using 24 and 36', (expect) => {
    const expected = 864;
    const actual = multiply(24, 36);

    expect.equal(actual, expected);
});

test('returns 8 using 96 and 12', (expect) => {
    const expected = 8;
    const actual = division(96, 12);

    expect.equal(actual, expected);
});

test('returns .8 using 12 and 15', (expect) => {
    const expected = .8;
    const actual = division(12, 15);

    expect.equal(actual, expected);
});
