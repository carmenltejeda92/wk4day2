/*  Author: C. Tejeda
    Date: 10.24.2023
    Purpose:  JavaScript Review Lab */


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
// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a + b);
//   console.log(c + d);
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

let animal = "horse"
if(animal === 'cow'){
    console.log('moooooo')
}else{
    console.log('Hey! You are not a cow!')
}


































