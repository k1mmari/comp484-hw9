// Exercises

/// Set 1: Advanced Syntax, Types, and Quirks

// Exercise 1: Complex Arithmetic and Standard Rules**
let answer = 3 + 5 * (10 / 2) - (8 - 4);
console.log(answer);
// 24

// **Exercise 2: Case Sensitivity Test**
let projectIdentifier = "COMP484";
ProjectIdentifier = "JS_Advanced"; // bc JS is case-sensetive

projectIdentifier = "JS_Adnanced";
console.log(projectIdentifier);


// **Exercise 3: String Quoting Challenge**
let courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log(courseDescription);

// **Exercise 4: Escaping and Console Output**
let errorMessage = "An internal server error occurred: \"Access Denied\"";
console.log(errorMessage);

// **Exercise 5: Type Coercion with Non-Plus Operators**
let valueA = 10;
let valueB = "4";
let resultSubtraction = valueA - valueB;
let resultMultiplication = valueA * valueB;
console.log(resultSubtraction, resultMultiplication);
console.log(typeof(resultSubtraction), typeof(resultMultiplication));

// ### Set 2: Operators and Type Theory

// **Exercise 6: Understanding `null` and `undefined` Types**
let unassignedVar;
let explicitNull = null;
console.log(typeof(unassignedVar), typeof(explicitNull));

// historical bug from earlier JS
// bc it stored values as binary tags
// the tag for object was 0, and null also has the same tag

// **Exercise 7: Boolean Assignment and Type Identification**
let isBlocking = true;
console.log(typeof(isBlocking)); // boolean

isBlocking = "true";
console.log(typeof(isBlocking)); // string


// **Exercise 8: Invalid Variable Naming**
let 1kmp = "Hello"; // can't start with a digit

let 1 kmp = "Hello"; // can't have a space

let 1@kmp = "Hello"; // can't have special characters

// **Exercise 9: Chained Shorthand Arithmetic**
let counterValue = 50;
counterValue /= 5;
counterValue -=3;
console.log(counterValue);
// 3

// **Exercise 10: Prefix vs. Postfix Unary Operators**
let x = 10;
let y_post = x++; // value uxed first and then incremented
console.log(x); // 10
console.log(y_post); // 11

let z_pre = ++x; // increment first and then use value
console.log(z_pre); // 11
console.log(x); // 11


// ### Set 3: Advanced Logic and Comparisons

// **Exercise 11: Loose Equality and Coercion**
let testNumber = 0;
let testBoolean = false;
if(testNumber == testBoolean) {
    console.log('equal');
}
// they are loosely equal
// because JS turns false to 0 before comparison
// '==' allows type coercion

// **Exercise 12: Strict Inequality Test**
let versionA = 10.0;
let versionB = "10.0";
if(versionA !== versionB) {
    console.log('not strictly equal');
} else {
    console.log('strictly equal');
}
// !== checks value and type
// and number not equal string
// so, they are not strictly equal

// **Exercise 13: Logical OR and AND Combination**
let isLoggedIn = true;
let isSubscriber = true;
let isTrialExpired = false;

if((isLoggedIn == true && isSubscriber == true) || (isLoggedIn == true && isTrialExpired == false)) {
    console.log('access granted');
} else {
    console.log('access denied');
}

// access granted

// **Exercise 14: Simulating XOR using Nested Conditionals**
let conditionA = false;
let conditionB = true;

if((conditionA && !conditionB) || (!conditionA && conditionB)) {
    console.log("XOR success");
} else {
    console.log("XOR fail");
}

// **Exercise 15: Converting IF/ELSE to Ternary Operator**
let scriptLoadType = "deferred";
let loadStatus;
if(scriptLoadType == "deferred") {
    loadStatus = "Non-blocking";
} else {
    loadStatus = "Potentially Blocking";
}

let loadStatusTernary = (scriptLoad == "deferred")
    ? "Non-blocking"
    : "Potentially Blocking"

// ### Set 4: Integration and Application

// **Exercise 16: Commenting and Code Structure**
/*
    FunctionL calculateRenderTime
    Purpose:
    This function will calculate the total time taken to parse HTML and execute JavaScript
*/

function calculateRenderTime() {

}

// **Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)**
let today = new Date();
let year = today.getYear();
let month = today.getMonth() + 1;
let day = today.getDate();

console.log("Today is " + month + "/" + day + "/" + year);

// **Exercise 18: Mixed Type Arithmetic Explanation**
let val1 = 20;
let val2 = "5";

let sumResult = val1 + val2;
let diffResult = val1 - val2;

// '+' can be either addition or concatenation
// when one operand is a string, JS uses concatenation
// all other operators only have one purpose so string is converted to a number

// **Exercise 19: Conditional based on Type Check**
let dataInput = 484;
if(typeof dataInput === "number") {
    console.log("Input is numeric");
} else {
    dataInput = true;
    console.log(typeof dataInput);
}

// **Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)**
/*
if a script is in the head then it means HTML hasn't finished laoding the elements the script tries to access
that's why throws an error such as "Cannot set property 'inner HTML' of null"
to fix this place the script at the end of <body>
use the 'defer' attribute so it runs after parsing is complete
*/

let heading = document.createElement("h1");
heading.textContent = "Interactive Layer Loaded";
document.body.appendChild(heading);

