const {findOdd} = require('../src/findtheoddint_4');

test('should throw an error from non array parameter', () => {
    expect(() => findOdd(1)).toThrow(/parameter/);
    expect(() => findOdd()).toThrow(/parameter/);
    expect(() => findOdd('test')).toThrow(/parameter/);
    expect(() => findOdd(NaN)).toThrow(/parameter/);
});

test('should throw an error if any array index isnt a Integer', () => {
    expect(() => findOdd(['a'])).toThrow(/parameter/);
    expect(() => findOdd([function(){}])).toThrow(/parameter/);
    expect(() => findOdd([[1]])).toThrow(/parameter/);
    expect(() => findOdd([[]])).toThrow(/parameter/);
    expect(() => findOdd([1.2,2])).toThrow(/parameter/);
    expect(() => findOdd([[0,1,2.2]])).toThrow(/parameter/);
});

test('should throw an error if there is any odd number or if there is more than one', () => {
    expect(() => findOdd([1,2])).toThrow(/only one odd/);
    expect(() => findOdd([1,1])).toThrow(/only one odd/);
    expect(() => findOdd([1,2,2,4])).toThrow(/only one odd/);
});

test('should return the odd Integer', () => {
    expect(findOdd([1,1,2])).toBe(2);
    expect(findOdd([1,2,2,4,4,1,3])).toBe(3);
    expect(findOdd([1,2,3,2,1,3,4])).toBe(4);
    expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toBe(5);
    expect(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])).toBe(-1);
    expect(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])).toBe(5);
    expect(findOdd([1,1,1,1,1,1,10,1,1,1,1])).toBe(10);
    expect(findOdd([5,4,3,2,1,5,4,3,2,10,10])).toBe(1);
});