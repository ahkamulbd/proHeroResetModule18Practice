/*
    You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
    triangle is Isosceles or not using if-else.
    Isosceles => two sides are equal

*/

var side1 = 8;
var side2 = 9;
var side3 = 9;

if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log('The Triangle is an Isosceles');
}
else {
    console.log('The Triangle is not an Isosceles');
}
