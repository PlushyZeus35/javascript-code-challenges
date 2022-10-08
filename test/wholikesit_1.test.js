const {likes} = require('../src/wholikesit_1');

test('should throw an error from non array parameter', () => {
    expect(() => likes(1)).toThrow(/parameter/);
    expect(() => likes()).toThrow(/parameter/);
    expect(() => likes('test')).toThrow(/parameter/);
    expect(() => likes(NaN)).toThrow(/parameter/);
});

test('should throw an error if any array index is non a string', () => {
    expect(() => likes([1])).toThrow(/parameter/);
    expect(() => likes(['test', 1])).toThrow(/parameter/);
    expect(() => likes(['test', []])).toThrow(/parameter/);
    expect(() => likes(['test', NaN])).toThrow(/parameter/);
    expect(() => likes(['test', {'test':0}])).toThrow(/parameter/);
    expect(() => likes(['test', true])).toThrow(/parameter/);
    expect(() => likes(['test', ()=>{}])).toThrow(/parameter/);
});

test('should return correct text with empty array', () => {
    expect(likes([])).toMatch('no one likes this');
});

test('should return correct text with 1 length array', () => {
    expect(likes(['Peter'])).toMatch('Peter likes this');
});

test('should return correct text with 2 length array', () => {
    expect(likes(['Jacob', 'Alex'])).toMatch('Jacob and Alex like this');
});

test('should return correct text with 3 length array', () => {
    expect(likes(['Max', 'John', 'Mark'])).toMatch('Max, John and Mark like this');
});

test('should return correct text with 4 length array', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toMatch('Alex, Jacob and 2 others like this');
});

test('should return correct text with +4 length array', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Peter', 'Jhon'])).toMatch('Alex, Jacob and 4 others like this');
});