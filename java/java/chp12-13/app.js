var character = prompt ("enter a character");

if (character >= 'A' && character <= 'Z') 
alert (" is an UpperCase character");

else if (character >= 'a' && character <= 'z') 
alert(" is an LowerCase character");



var input1 = parseInt(prompt("Enter first number:"));
var input2 = parseInt(prompt("Enter second number:"));
if (input1 == input2) {
    document.write(input1 + " is equal to " + input2);
} else if (input1 > input2) {
    document.write(input1 + " is larger than " + input2);
} else {
    document.write(input1 + " is lesser than " + input2);
}



const number = parseInt(prompt("Enter a number:"));
if(number > 0){
    document.write("</br>"+"The number is positive")
}
else if(number == 0){
    document.write("</br>"+"The number is zero")
}
else{
    document.write("</br>"+"The number is negative")
}




var correctpassword = "areesha";
var userpassword = prompt("Enter his/her password")
if(userpassword==correctpassword){
    alert("users has entered password")
}
else{
alert("please enter your password")
}
var userpassword = prompt("Enter confirmation password")
 if(userpassword==correctpassword){
    alert("correct")
}else{
    alert("incorrect password")
};





var hour = prompt ("enter an hour");

var greeting;
var hour = 13;
if (hour < 18) {
alert("Good day")
}
else
    alert("Good evening");



    var time = +prompt("Enter a time");
    if(time >= 000 && time < 1200){
        alert("Good Morning")
    }else if( time >= 1200 && time < 1700){
        alert("Good Afternoon");
    }
    else if( time >= 1700 && time < 2100){
        alert("Good Evening");
    }
    else if( time >= 2100 && time < 2359){
        alert("Good Night");
    }

      