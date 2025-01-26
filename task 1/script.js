// Using var (global scope)
var userName = "Fatima";
if (userName === "Zara") { // Changed name and used strict comparison
    console.log(userName); // output: Zara (only if condition is true)
}
console.log(userName); // output: Fatima (since var is a global scope)

// Using let (block scope)
let fullName = 'Fatima Khalid';
if (true) {
    let fullName = 'Sana Ahmed';
    console.log(fullName); // output: Sana Ahmed (inside the block scope)
}
console.log(fullName); // output: Fatima Khalid (outside the block scope, let is block-scoped)

// Using setTimeout with var (issues with closure)
for (var count = 0; count < 5; count++) {
    setTimeout(() => {
        console.log(count); // output: 5 after 3 seconds (due to closure issue with var)
    }, 3000);
}

// Now, using let for block scope
for (let index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index); // output: 0, 1, 2, 3, 4 after 5 seconds (because let is block-scoped)
    }, 5000);
}

// Default Parameter (type 1)
function displayMessage(firstName = 'Ayesha', lastName = 'Khan') {
    return firstName + ' ' + lastName; // Added space for better formatting
}
console.log(displayMessage()); // output: Ayesha Khan

// Default Parameter (type 2)
function introduceYourself(intro = 'Hello, I am', person = displayMessage()) {
    return `${intro} ${person}`; // Using template literals for better readability
}
console.log(introduceYourself()); // output: Hello, I am Ayesha Khan

// Template Literals
let color = 'Blue';
let item = 'Car';
console.log(color + ' and ' + item); // without template literal
console.log(`${color} and ${item}`); // with template literal
