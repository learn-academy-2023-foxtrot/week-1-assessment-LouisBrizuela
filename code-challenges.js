// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:
// name : moreChar
// input : 2 strings
// output : 1 string
// process if, else if

const moreChar = (fruit1, fruit2) => {
    if (fruit1.length > fruit2.length) {
        return fruit1
    }
    else if (fruit1.length < fruit2.length) {
        return fruit2
    }
    else {
        return "same length" // added else as a catch all just incase if both variables passed have the same character length 
    }
}
console.log(moreChar(fruit1, fruit2))  
// Output : banana
console.log(moreChar(fruit3, fruit4))
// Output : cherry

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:
// name : isItBoiling
// input : 1 number 
// output : "below, above, or is at, boiling point"
// process : string interpolation, 
// use if, else if, else to check if the argument passed is more than, less than or equal to

const isItBoiling = (liquidTemp) => { // 
    if (liquidTemp > 212) { // this condition checks if the variable that is passed is greater than 212
        return `${liquidTemp} is above boiling point`
    }
    else if (liquidTemp < 212) { // this condition checks if the variable that is passed is less than 212
        return `${liquidTemp} is below boiling point`
    }
    else { // this will catch the variable that is neither less than or greater than and only equal too
        return `${liquidTemp} is at boiling point`
    }
}
console.log(isItBoiling(temperature1))
// output : 42 is below boiling point
console.log(isItBoiling(temperature2))
// output : 350 is above boiling point
console.log(isItBoiling(temperature3))
// output : 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// name : listCombined
// input : no input
// output : 1 number
// process .concat, .length,
// use .concat to combine the lists, then use .length to get the number of elements in the array

var listCombined = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns) // .concat makes a new variable that will be assigned to the new combined array list
console.log(listCombined.length) // .length output the total number of elements in the array
// output : 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
// name : revString
// input : no input
// output : 2 strings
// process : .split .reverse .join,
// use .split to convert the string into an array, then use .reverse, then .join to show the string reversed

var revString = currentCohort.split("") //  .split to make the string into an array in order to use .reverse, assign the new array to revString
revString.reverse() // reverses the array 
console.log(revString.join("")) // .join to convert the array into a string and outputs the string
// output : 3202 tortxof

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code:
// name : numLocation
// input : 
// output : 1 number
// process : .lastIndexOf
// use .lastIndexOf to get the last index of the variable

var numLocation = numberOfConnections.lastIndexOf(givenValue1) // I create a new variable in order to assign it the last index location of the given value
console.log(numLocation)
//  output : 7

var numLocation = numberOfConnections.lastIndexOf(givenValue2) // the same code but I just changed the variables
console.log(numLocation)
//  output : 8