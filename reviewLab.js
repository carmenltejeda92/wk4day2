/*  Author: C. Tejeda
    Date: 10.24.2023
    Purpose:  JavaScript Review Lab */

/* I. Variables & Datatypes */
/* A. Q + A
1. How do we assign a value to a variable?
    - by using the assignment operator (=)
    - let num = -5;
2. How do we change the value of a variable?
    - a new value can be assigned to a variable at any time as long as the variable was declared with "let" (or var?)
    - let num = 8;
3. How do we assign an existing variable to a new variable?
    - using the assignment operator to set the new variable equal to the existing variable
    - let otherNum = num;
4. Remind me, what are declare, assign, and define?
    - The declare keyword declares a word's (identifier's) meaning & allocates memory for that variable but no value is set
        - commonly used for functions, variables, constants, and classes but can also be used fo entities such as enumeration and type definitions
        - let carName;
    - An assignment statement sets and/or re-sets the value stored in the storage location(s) denoted by a variable name; copies a value into the variable
        - score  = (10 * points) + 5
    - A definition means the variable has been given a value; been initialized; value to the right of the assignment operator
        - (10 * points) + 5 - from above example
5. What is pseudocoding and why should you do it?
    - A detailed & readable description of what a computer program or algorithm should do
    - Psuedocode provides programmers w/a detailed template for writing code in a specific programming language
6. What percentage of time should be spent thinking about how 
    you're going to solve a problem vs actually typing in code to solve it? 
    - 60-65% planning, 35-40% coding*/


/* B. Strings */

// 1. Create a variable called firstVariable
let firstVariable;

// 2. Assign it the value of the string "Hello World"
firstVariable = 'Hello World'

// 3. Change the value of this variable to some number
firstVariable = 2
 
// 4. Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable

// 5. Change the value of secondVariablevto any string.
secondVariable = 'any string'

//6. What is the value of firstVariable?
// console.log(firstVariable)
// value is 2

// 7. Create a variable called yourName and set it equal to your name as a string. 
//    Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
//      ex: Hello, my name is Jean Valjean
let yourName = 'Carmen'
let greetings = ('Hello, my name is ' + yourName)
// console.log(greetings)



/* C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console */
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' + 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false && false)
//   console.log(e + 'Kevin');
//   console.log(a + b - c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a - a + d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 + '48');




/* D. The farm
1. Declare a variable animal. Set it to be either "cow" or something else
2. Write code that will print out "mooooo" if the it is equal to cow
3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
4. Commit */

// let animal = "horse"
// if(animal === 'cow'){
//     console.log('moooooo')
// }else{
//     console.log('Hey! You are not a cow!')
// }


/*E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, 
    a message should print "Sorry, you're too young." */

// let age = 4
// if(age >= 16){
//     console.log('Here are the keys!')
// }else if (age <= 15){
//     console.log('Sorry, you are too young')
// }



/* II. Loops */
/* A. The basics */
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// 2. Write a loop that will print out all the numbers from 10 up to and including 400
// for(let i = 10; i <= 400; i++){
//     console.log(i)
// }

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000 
// for(let i = 12; i <= 4000; i = i + 3){
//     console.log(i)
// }



/* B. Get even
1. Print out the numbers that are within the range of 1 - 100
2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
 */

// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i + ' <-- is an even number')
//     }else{
//         console.log(i)
//     }
// }


/* C. Give me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five */
// for(let i=1; i<=100; i++){
//     if(i%5==0 && i%3==0){
//         console.log('I found a ' +i+ '. High five but three is a crowd!')
//     }else if (i%3==0){
//         console.log('I found a ' +i+ '. Three is a crowd')
//     }else if(i%5==0){
//         console.log(' I found a '+i+'. High five!')
//     } 
// }
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three


/* D. Savings account
1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
    Check your work! Your bank_account should have $55 in it.*/

// let bank_account = 0
// for(let i = 0; i<=10; i++){
//     bank_account += i
// }
// console.log(bank_account)

/* 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
    Check your work! Your bank_account should have $10,100 in it.*/

// let bank_account = 0
// for(let i=0; i<=100; i++){
//     bank_account += i
// }

// bank_account *= 2
// console.log(bank_account)






/* III. Arrays & Control flow */
/* A. Talk about it:
1. What are the things in an array called?
    - The things in an array are elements
2. Do Arrays guarantee those things will be in order?
    - Items in an array will always be in the same order unless moved around 
    - Items in the array are not in a specific order, rather, are in the order they were placed
3. What real-life thing could you model with an array?
    - A checkerboard
 */



/* B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes */
// const quotes = ['roses are red', 'violets are blue', 'sugar is sweet']
// console.log(quotes)



/* C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true] */

// 1. How do you access the 1st element in the array?
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0])

// 2. Change the value of "Hello"to "World"
// randomThings.splice(2, 1, "World")

// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log(); 
// console.log(randomThings)




/* D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]*/

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//1. What would you write to access the 3rd element of the array?
// console.log(ourClass[2])

//2. Change the value of "Github" to "Octocat"
// ourClass.splice(4, 1, "Octocat")
// console.log(ourClass)

//3. Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City")
// console.log(ourClass)




/* E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20] */

const myArray = [5, 10, 500, 20]

//1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Carmen")
// console.log(myArray)

// 2. Remove the 5 from the beginning of the array.
// myArray.shift()
// console.log(myArray)

//3. Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley")
// console.log(myArray)

//4. Remove the string of your choice from the end of the array.
// myArray.pop()
// console.log(myArray)

// 5. Reverse this array using Array.prototype.reverse(). 
//    Did you mutate the array? What does mutate mean? 
//      - No. Mutating the array is changing the array itself instead of returning a new array with the new changes
//    Did the .reverse() method return anything?
//      - yes, the reverse() method returned the reversed array to store into a new array

// const reversed = myArray.reverse()
// console.log(reversed)




/* F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... else statement that:

1. console.log()s "little number" if the number is entered is less than 100
2. console.log()s big numberif the number is greater than or equal to 100.
 */

// let num = 99
// if(num < 100){
//     console.log('little number')
// }else if(num >= 100){
//     console.log('big number')
// }



/* G. Monkey in the Middle
Write an if ... else if ... elsestatement:

1. console.log()little numberif the number entered is less than 5.
2. If the number entered is more than 10, log big number.
3. Otherwise, log "monkey". */

// let num = 11
// if(num < 5){
//     console.log('little number')
// }else if (num > 10){
//     console.log('big number')
// }else{
//     console.log('monkey')
// }


/* H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. */
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
//      log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log('Kristyn is rocking that ' + kristynsCloset[2] +' today!')

// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, 'Raybans')
// console.log(kristynsCloset)

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// kristynsCloset.splice(5, 1, 'stained knit hat')
// console.log(kristynsCloset)

// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// console.log(thomsCloset[0][0])

// 5. In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][2])

// 6. Access one item from Thom's accessories array.
// console.log(thomsCloset[2][0])

// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log('Thom is looking fierce in ' + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ', and ' + thomsCloset[2][1])

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = 'Footie Pajamas'
// console.log(thomsCloset[1])




/* IV. Functions */
/* B. printCool
Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
*/
// function printCool(name){
//     return name + " is cool"
// }

// console.log(printCool('Carmen'))


/* C. calculateCube
Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number. */
// function calculateCubethat(a){
//     return a*a*a
// }

// console.log(calculateCubethat(5))


/* D. isVowel
Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you 
    write functions, take a minute to test them with different values to make sure they behave the way you want. */

// let vowels = ['a', 'e', 'i', 'o', 'u']

// function isVowelthat(alphabet){
//         if(vowels.includes(alphabet)){
//             console.log('true')
//         }else{
//             console.log('false')
//         }
// }

// isVowelthat('a')


/* E. getTwoLengths
Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where 
each number is the length of the corresponding string. */

// function getTwoLengthsthat(a, b){
//     const lengths = [a.length, b.length]
//     return lengths
// }

// console.log(getTwoLengthsthat('six', 'nine'))


/* F. getMultipleLengths
Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. 
The function should return an array of numbers where each number is the length of the corresponding string. */

function getMultipleLengthsthat(a){
    b = a.length
    console.log(b)
}

getMultipleLengthsthat(['string', 'two', 'seven'])






































































