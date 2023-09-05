// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: the output will be 10 because in the string there are 10 spots, 9 characters but also a space because it counts everything within the " "
// b) Verify and explain: .length is a property that returns the length of characters (including a space) in a string and the number of items in an array 

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: the output will be "o"
// b) Verify and explain: the output was "o" because [4] is refering to the index location of the character in the string, all indexes start with storing data in index location 0

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: the output is ruby because const index is assigned to the value of 1, which is later passed in languages[]. this is asking to pull and output the item stored in index location 1
// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: upper case the string? not upper case the string because its not specifically stating which one?
// b) Verify and explain: output :TypeError it is not a function, this is because .toUpperCase is a method and it will not work in an array, in order for this to work you would have to convert the array into a string then use .toUpperCase

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: string
// b) Verify and explain: output: "number" this is because the typeof operator returns the literal data type of what is passed through it (written in string), in this instance dataTypes.length was passed through it and the output of dataTypes.length would be "4", so the typeof operator returns the data type of 4 which is a number.