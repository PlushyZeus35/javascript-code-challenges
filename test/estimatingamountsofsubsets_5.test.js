const {est_subsets} = require('../src/estimatingamountsofsubsets_5');

test('should return the number of subsets that do not contain a repeated element', () => {
    expect(est_subsets([1, 2, 3, 4])).toBe(15);
    expect(est_subsets([2, 3, 4, 5, 5, 6, 6, 7, 8, 8])).toBe(127);
    expect(est_subsets(['a', 'z', 'z', 'z', 'b', 'j', 'f', 'k', 'b', 'd', 'j', 'j', 'n', 'm', 'm'])).toBe(511);
    expect(est_subsets([1,1,1,1,1,1,1,1])).toBe(1);
    expect(est_subsets([])).toBe(0);
    expect(est_subsets(['R','o','Y','W','T','O','B','A','q','v','S','U','g','i','y','h','E','K','M','J','r','n','b','a','u','x','d','l','F','e','m','s','N'])).toBe(8589934591);
});