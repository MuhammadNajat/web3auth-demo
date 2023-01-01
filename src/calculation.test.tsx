const {add} = require('./calculation');

test('Should output sum of 2 numbers', () => {
    const output = add(5, 10);
    const expected = 15;
    
    expect(output).toBe(expected);
});

export {};
/*
test('Should output difference of 2 numbers', () => {
    const output = subtract(10, 1);
    const expected = 9;
    
    expect(output).toBe(expected);
});

test('Should output square of a number', () => {
    const output = square(9);
    const expected = 81;
    
    expect(output).toBe(expected);
});*/