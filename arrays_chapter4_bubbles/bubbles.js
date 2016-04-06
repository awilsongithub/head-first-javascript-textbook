// ANALYZE DATA SET ARRAYS AND LOG INFO ABOUT THEM
// VARIABLES AND FUNCTIONS DECLARED AT THE TOP
// TODO why said param/arg x in printAndGetHighest was undefined > error...
// ... when arrayUsed value set at very top of file?
// param names in call and function can differ


// data set arrays
var walkDistances = [1, 1.5, 2, 1.5, 0.5];
var buildingStories = [4, 2, 30, 45, 100];
var caloriesPerServing = [ 100, 150, 350, 400];

// function to print each walker and distance they walk
// and to get the longest distance
function printAndGetHighestValue(x) {

    // iterate array, output item # and it's value.
    var highest = 0;
    var output;
    for (var i=0; i < x.length; i++ ){
        output = ('Item # ' + i + ' has a value of ' + x[i] + '.');
        console.log(output);
    }
    // iterate over array, test for highest, update value of highest item(s). We will later use this value to push any array items with highest value into an array list of items with the highest value.
    for (var num =0; num < x.length; num++) {
        if (x[num] > highest) {
            highest = x[num];
        }
    }
    return highest;
}

// get item(s) with highest value(s) using array and var highest which was returned from the other function
function getHighestItems(array, highest) {
    var highestItems = []; // might be multiple if a tie
    for (var i = 0; i < array.length; i++) {
        if (array[i] == highest) {
            highestItems.push(i);
        }
    }
    return highestItems;
}

// set data set array to use
var arrayUsed = caloriesPerServing;

// perform operations on arrayUsed
var highest = printAndGetHighestValue(arrayUsed);
console.log('The highest value is ' + highest + '.');
console.log(arrayUsed.length + ' were measured.');

highestItems = getHighestItems(arrayUsed, highest);
console.log('Item(s) with the highest value(s): ' + highestItems);
