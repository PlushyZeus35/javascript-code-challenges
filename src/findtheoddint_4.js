/*
    * Issue Id: 4
    * Title: Find the odd int
    * Description: Given an array of integers, find the one that appears an odd number of times.
    * There will always be only one integer that appears an odd number of times.
    * Examples
    * [7] should return 7, because it occurs 1 time (which is odd).
    * [0] should return 0, because it occurs 1 time (which is odd).
    * [1,1,2] should return 2, because it occurs 1 time (which is odd).
    * [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    * [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
    * Author: https://github.com/PlushyZeus35
    * Refactor: 
*/

function findOdd(array) {
    // Validate inputs
    if(!Array.isArray(array)) throw Error('parameter must be an array');
    array.forEach(element => {
        if(!Number.isInteger(element)) throw Error('every parameter index must be an Integer')
    });

    const oddNumbers = new Set()
    array.forEach(element => {
        let counter = 0;
        array.forEach(element2 => {
            if(element === element2){
                counter++;
            }
        });
        // If is an Odd Integer add it to the set
        if(counter%2!=0)
            oddNumbers.add(element)
    });
    // Validate only one odd number in array
    if(oddNumbers.size!=1) throw Error('only one odd Integer is allowed in array');
    return oddNumbers[Symbol.iterator]().next().value;

}

module.exports = {findOdd};