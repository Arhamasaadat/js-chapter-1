// Declared an empty array using JS literal notation to store student names in future.
let studentName = []

// Declared an empty arry using JS object notation to store student names in future.
let studentNameObject = new Array ();

// Declare and initialize a strings array.
let flowersarray = ["Rose","Lilies","Sunflowers","Tulips"]

// Declare and initialize a numbers array.
let numbersarray = [2,4,6,8,10];

// Declare and initialize a boolean array.
let booleanarray = [true,false];

//Declare and initialize a mixed array.
let mixedarray = ["Arhama","Jasmine",true,21,false,"Hamza",17];

// // Declare and initialize an array and store available education qualifications in pakistan...
// let educationalQualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h4>Qualifications:<h4>")

// document.write(
//     "<span>" + qualification[0] + "</span>" +"<br>"
// )
// document.write(
//     "<span>" + qualification[1] + "</span>"+"<br>"
// )
// document.write(
//     "<span>" + qualification[2] + "</span>"+"<br>"
// )
// document.write(
//     "<span>" + qualification[3] + "</span>"+"<br>"
// )
// document.write(
//     "<span>" + qualification[4] + "</span>"+"<br>"
// )
// document.write(
//     "<span>" + qualification[5] + "</span>"+"<br>"
// )
// document.write(
//     "<span>" + qualification[6] + "</span>"+"<br>"
// )
// document.write(
//     "<span>" + qualification[7] + "</span>"+"<br>"
// )

//// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
let students=["Michael","john","Tony"]
let studentScore =[320,230,480]
let totalScore =(500)
let percentage1 =(studentScore[0] / totalScore*100) ;
let percentage2 =(studentScore[1] / totalScore*100) ;
let percentage3 =(studentScore[2] / totalScore*100) ;
document.write("<h1>Score & Percentage of Student </h1>")
document.write(
    " <h4> Score of "+studentName[0]+" is "+studentScore[0]+". Percentage :"+percentage1 +"% </h4>" +"<br>"
)
document.write(
    " <h4> Score of "+studentName[1]+" is "+studentScore[1]+". Percentage :"+percentage2 +"% </h4>" +"<br>"
)
document.write(
    " <h4> Score of "+studentName[2]+" is "+studentScore[2]+". Percentage :"+percentage3 +"% </h4>" +"<br>"
)

// 9. Initialize an array with color names. Display the array elements in your browser.
let colors = ["Purple", "Pink", "Blue"];
document.write("<b>Initial Array:</b> " + colors + "<br><br>");


let addBegin = prompt("Which color do you want to add at beginning?");
colors.unshift(addBegin);
document.write("<b>After adding at beginning:</b> " + colors + "<br><br>");


let addEnd = prompt("Which color do you want to add at end?");
colors.push(addEnd);
document.write("<b>After adding at end:</b> " + colors + "<br><br>");


colors.unshift("yellow", "black");
document.write("<b>After adding two colors at beginning:</b> " + colors + "<br><br>");

colors.shift();
document.write("<b>After deleting first color:</b> " + colors + "<br><br>");

colors.pop();
document.write("<b>After deleting last color:</b> " + colors + "<br><br>");

let indexAdd = +prompt("Enter index number to add color:");
let colorName = prompt("Enter color name:");
colors.splice(indexAdd, 0, colorName);
document.write("<b>After adding color at index:</b> " + colors + "<br><br>");


let indexDelete = +prompt("Enter index number to delete color(s):");
let deleteCount = +prompt("How many colors do you want to delete?");
colors.splice(indexDelete, deleteCount);
document.write("<b>Final Array:</b> " + colors);


let student_scores =[320,230,480,120]
console.log(student_scores);
console.log(student_scores.sort());


let cities =["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
let splice =cities.splice(2,3)
console.log(splice);

let arr = ["I ","have ", "a " ,"pet " , "dog"]
console.log(arr);

console.log(arr.join(""));


let furit = []
furit.push("apple")
furit.push("banana")
furit.push("pine apple")
console.log(furit);
console.log(furit.shift())