/*This is a short-length challenge, but requires some clever thinking.

Given two lists, find the smallest difference (subtraction) between any two nums.

For example, given the arrays:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]
The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

Write a function that determines the smallest difference. */

function smallestDiff(arr1, arr2){
    let difference = null;
    for(let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if(Math.abs(arr1[i] - arr2[j]) < difference){
                difference = arr1[i]-arr2[j]
            } else {
                continue
            }
        }
    }

}