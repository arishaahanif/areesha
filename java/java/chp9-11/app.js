var city = prompt('Please enter your city');
if ("karachi".toLocaleUpperCase);
alert('Welcome to the city of lights');

var gender = prompt("Enter your Gender please ?")
if (gender.toUpperCase() == "male".toUpperCase()) {
    alert("Good Morning Sir")
}
else if (gender.toUpperCase() == "female".toUpperCase()) {
    alert("Good Morning Ma’am")
};
var color = prompt("Enter any color of traffic signal")
if (color.toUpperCase() == "red".toUpperCase()) {
    alert("must stop")
}
if (color.toUpperCase() == "yellow".toUpperCase()) {
    alert("Ready to move")
}
if (color.toUpperCase() == "green".toUpperCase()) {
    alert("move now")
}
var fuel = prompt("Enter your car fuel in liters")
if (fuel >= 0.25 || fuel >= 100){
    alert("Feel relax")
}
else if (fuel <= 0.25) {
    alert("“Please refill the fuel in your car")
};

 var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true");
 } 
  var b = 82;
   if (b++ === 83){ 
alert("given condition for variable b is true");
 } 
 var c = 12; 
 if (c++ === 13){
 alert("condition 1 is true"); } 
 if (c === 13){
 alert("condition 2 is true"); }
  if (++c < 14){ 
      alert("condition 3 is true"); } 
      if(c === 14){ 
    alert("condition 4 is true"); } 
 
var materialCost = 20000;
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){ 
      alert("The cost equals"); } 
if (true){ 
    alert("True"); } 
    if (false){ 
        alert("false")
    }
var mobobtained = +prompt("Enter a marks obtained in 3 subjects");
var totalmarks = +prompt("Enter total marks");
var grade;
var per = ((mobobtained/totalmarks * 100 )).toFixed(1);
document.write("</br>"+"<h1>"+"Marks sheet"+"</h1>");
document.write("</br>")
document.write("total marks"+totalmarks);
document.write("</br>")
document.write("Marks obtained"+mobobtained);
document.write("</br>")
document.write("per"+per);
document.write("</br>")
if(per >= 80){
    document.write("Grade:A-one");
}
else if (per >= 70){
    document.write("Grade:A");
}
else if (per >= 60){
    document.write("Grade:B");
}
else if (per < 60){
    document.write("fail");
}
else{
    document.write("Remarks:you need to improve");
}
 document.write("</br>"+"Grade:B");

var secretno = prompt('Please enter your secretno');
if(secretno <= 10){
    alert("correct answer")
}
else
    alert("wrong")

    var number = prompt("enter your number");
    if (number % 3 === 0){
        alert("your number is divisible by 3");
    }else{
        alert("not divisible by 3")
    }
     
    var number = prompt("enter your number");
    if (number % 2 === 0){
        alert("your number is even")
    }else{
        alert("number is odd")
    }

    var temp = prompt("Enter a temperature")
    if( temp > 40 ){
        alert("It is too hot outside.")
    }
    if( temp > 30 ){
        alert("The Weather today is Normal.")
    }
    if( temp > 20 ){
        alert("Today’s Weather is cool.")
    }
    if( temp > 10 ){
        alert("OMG! Today’s weather is so Cool.")
    }
    

const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);




