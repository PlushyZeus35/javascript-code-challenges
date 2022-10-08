/*
    * Issue Id: 1
    * Title: Who likes it?
    * Description: You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
    *    want to create the text that should be displayed next to such an item.
    *   Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
    *   [] --> "no one likes this"
    *   ["Peter"] --> "Peter likes this"
    *   ["Jacob", "Alex"] --> "Jacob and Alex like this"
    *   ["Max", "John", "Mark"] --> "Max, John and Mark like this"
    *   ["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"
    *   Note: For 4 or more names, the number in "and 2 others" simply increases.
    * Author: https://github.com/PlushyZeus35
    * Refactor: 
*/

function likes(names) {
    // Initial parameters validations
    if(Array.isArray(names) === false) throw Error('parameter must be an array')
    names.forEach(element => {
        if(typeof element != 'string') throw Error('every parameter index must be a string')
    });

    // Defined responses
    let endResponse = ' likes this';
    let response = '';

    // No one and one option
    if(names.length==0){
        return 'no one' + endResponse;
    }
    if(names.length==1){
        return names[0] + endResponse;
    }

    endResponse = ' like this'

    // More than 4 users we collapse the result
    if(names.length>=4){
        return names[0] + ', ' + names[1] + ' and ' + (names.length-2) + ' others' + endResponse;
    }

    // Concatenate in 3 users situation
    for(let i=0; i<names.length; i++){
        if(i==names.length-2){
            response += names[i] + ' and ';
        }else if(i==names.length-1){
            response += names[i];
        }else{
            response += names[i] + ', ';
        }
    }
    return response + endResponse;
}

module.exports = {likes};



 





