/*
    You are given three numbers 13, 79, and 45. Write a program that will print the 
    largest number using if-else.
*/

var number1 = 13;
var number2 = 79;
var number3 = 45;

if (number1 > number2 && number1 > number3) {
    console.log(number1 + ' is the greatest number');
}
else if (number2 > number1 && number2 > number3) {
    console.log(number2 + ' is the greatest number');
}
else {
    console.log(number3 + ' is the greatest number');
}