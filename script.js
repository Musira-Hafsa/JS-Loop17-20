// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays) 
let multiArray = [[], [], []];  


// 2. Declare and initialize a multidimensional array
// representing the following matrix:
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
for(let i=0; i<matrix.length; i++){
    document.write(matrix[i].join(" ")+ "<br>")
}

// 3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var tableNumber = +prompt("Enter the number for multiplication table:");
var tableLength = +prompt("Enter the length of the table:");

document.write("<h3>Multiplication Table of " + tableNumber + "</h3>");

for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h3>Counting:</h3>");
for (let i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<h3>Reverse Counting:</h3>");
for (let i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

document.write("<h3>Even:</h3>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<h3>Odd:</h3>");
for (let i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}

document.write("<h3>Series:</h3>");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to Bakery! What do you want to order?").toLowerCase();

if (A.indexOf(userInput) !== -1) {
  alert(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery.");
} else {
  alert("We are sorry, " + userInput + " is not available in our bakery.");
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
let X = [24, 53, 78, 91, 12];
let largest = X[0];

for (let i = 1; i < X.length; i++) {
  if (X[i] > largest) {
    largest = X[i];
  }
}
document.write("Array items: " + X + "<br>");
document.write("The largest number is " + largest);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
let M = [24, 53, 78, 91, 12];
let smallest = M[0];

for (let i = 1; i < M.length; i++) {
  if (M[i] < smallest) {
    smallest = M[i];
  }
}
document.write("Array items: " + A + "<br>");
document.write("The smallest number is " + smallest);


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
document.write("<h3>Multiples of 5 (1 to 100):</h3>");
for (let i = 5; i <= 100; i += 5) {
  document.write(i + ", ");
}