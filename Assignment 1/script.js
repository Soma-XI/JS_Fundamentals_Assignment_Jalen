document.write("<h2>Question number 1</h2>");
let studentName="Jalen White";
let studentAge = 21;
let isEnrolled = true;
 
 
document.write("<h3>part 1 : Variables, Data Types &amp; Type Casting</h3>");
document.write(`student name is ${studentName} `);
document.write("<br>");
document.write(`student age is ${studentAge} `);
document.write("<br>");
document.write(`is student enrolled :  ${isEnrolled} `);
document.write("<h3>Type Casting</h3>");
document.write(" before casting, the type of studentAge is :  " + typeof studentAge );
document.write("<br>");
studentAge = String(studentAge);
 
document.write(" after casting, the type of studentAge is :  " + typeof studentAge );
document.write("<br>");





document.write("<h1> Step 2 </h1>");
let num1 = Number(prompt("Please enter a numbers", "2"));
let numr2 = Number(prompt("Please enter another number", "2"));

 

// Using +
document.write("This is adding two variables together " +   (num1+numr2)   );
// Using -
document.write(" <br> This is subtracting two variables together ", num1-numr2);
// Using *
document.write(" <br> This is multiplying two variables together ", num1*numr2);
// Using /
document.write(" <br> This is dividing two variables together ", num1/numr2);
// Using %
document.write(" <br> This is when modules is used on the two variables together ", num1%numr2);
 
document.write("<h1> Step 3 </h1>");
 
let age = Number(prompt("Please enter your age", "18"));
if (age >=18) {
// You are eligible to vote!
document.write("You are eligible to vote! " );
} else {
//You are not eligible to vote yet
document.write("You are not eligible to vote yet " );
}
 
document.write("<h1> Step 4 </h1>");
 
for ( let i = 1 ; i<11  ; i++){
 
document.write(" " + i);
 
}
 
let num3;
 
do {
numr3 = Number(prompt("Please enter number greater than 10", "14"));
 
}
while ( num3 <=10  );
 
document.write("<h1> perfect job! you are amazing! </h1>");