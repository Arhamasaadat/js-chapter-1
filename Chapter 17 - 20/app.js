//Declare and initialize an empty multidimensional array. (Array of Arrays)
var arr = [[[]]]

//Declare and initialize a multidimentional array representing the following matric
var num = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [0, 1, 0, 2]
]
console.log(num)
document.write("<h2>Matrix</h2>");
for (i = 0; i < num.length; i++) {
    document.write(num[i].join(" ") + "<br>");
    console.log(num[i].join(" "));
}
 //Write a program to print numeric counting from 1 to 10
 document.write("<h2>Numeric counting</h2>")
 for (i = 0; i < 11; i++){
    document.write(i + "<br>")
 }

 //Write a program to print multiplication table of any number using for loop.
 var userNum =+prompt("Enter a number which table you want")||5
 var userLen =+prompt("Enter length multiplication table")||100
 document.write("<h2>tables</h2>");
 for(i = 1; i<=userLen; i++){
    document.write(userNum+ "x" + i + " = " + userNum * i +"<br>")
 }
 
 //Write a program to print items of the following array using for loops;
//  fruits=["apple",]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h2>Fruits Name</h2>");
for (i = 0; i < fruits.length; i++) {
    document.write(
        i + 1 + ") " + fruits[i] + "<br>")
}

//Generate the following series in your browser
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15]
document.write("<h2>Counting</h2>")
document.write(
      num.sort(
        function (a, b) { return (a - b) }

    ) + "<br>"
)
document.write("<h2>Reverse</h2>")
document.write(num.reverse() + "<br>")

document.write("<h2>Even Number </h2>")
for  (var i = 0; i <= 20; i+= 2){
    document.write(i + "<br>")
}


document.write("<h2>Odd Numbers</h2>");
for (var i = 1; i < 20; i += 2) {
    document.write(
        i + "<br>"
    )
}
document.write("<h2>Series</h2>");
for (var i = 2; i < 20; i += 2) {
    document.write(
        i + "k" 
    )
}
//You have an array.
var biscuits = ["cake", "apple pie", "cookie", "chips", "patties"]
var userbis = prompt("Hello!Which biscuit you want please enter ")
for (var i = 0; i <= biscuits.length; i++) {
    if (userbis == biscuits[i]) {
        alert("Your order is conform");
    }
}

//Write a program to iderntify the largest number in the given array.

var number = [24, 53, 78, 91, 12];
var largest = number[0];

for (var i = 0; i < number.length; i++) {
    if (number[i] > largest) {
        largest = number[i];
    }
}

console.log(largest);
//Write a program to identify the smallest number in the given array.
var number =[24,53,78,91,12]
var smaller =number[0];
for (var i = 0; i < number.length; i++) {
    if (number[i] < smaller) {
        smaller = number[i];
    }
}
console.log(smaller);
//Write a program to print multiples of 5 ranging 1 to 100.
for(var i=5; i<=100; i+=5){
    document.write(i)
}