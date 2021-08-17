import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('when guess and correctNumber are the same, should output 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess1 = 1;
    const correct1 = 1;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess1, correct1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when guess is less than correctNumber, should output -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess2 = 1;
    const correct2 = 3;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess2, correct2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('when guess is greater than correctNumber, should output 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess3 = 4;
    const correct3 = 2;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess3, correct3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

