/*
    * Issue Id: 5
    * Title: Estimation Amount of subsets
    * Description: Given a set of elements (integers or string characters, characters only in RISC-V), 
    * where any element may occur more than once, return the number of subsets that do not contain a repeated element.
    * Examples
    * est_subsets([1, 2, 3, 4]) == 15
    * est_subsets(['a', 'b', 'c', 'd', 'd']) == 15
    * Author: https://github.com/PlushyZeus35
    * Refactor: 
*/

function est_subsets(array){
    array = array.filter((each,index) => array.indexOf(each)==index);
    let counter=0;
    for(let i=0; i<array.length; i++){
        counter += 2**i;
    }
    return counter;
}

module.exports = {est_subsets};