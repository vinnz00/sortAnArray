//pseudo code
//The sort() method sorts the elements of an array.
//The sort order can be either alphabetic or numeric, and either ascending or descending.
//By default, the sort() method sorts the values as strings in alphabetical and ascending order.
//first we take a function "sortArray" and then use sort() method to sort the elements
//and console it, we can find sorted in the node element
//Actual code

const sortArray = [45, 67, 88, 55, 80, 90];
sortArray.sort(function(a, b){return a-b});
console.log(sortArray);