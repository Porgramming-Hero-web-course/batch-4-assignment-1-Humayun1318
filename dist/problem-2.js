"use strict";
{
    //Problem-2
    //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
    function removeDuplicates(arrayOfNumbers) {
        let uniqueArray = [];
        for (let singleElement of arrayOfNumbers) {
            if (!uniqueArray.includes(singleElement)) {
                uniqueArray.push(singleElement);
            }
        }
        return uniqueArray;
    }
    ;
    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
    //
}
