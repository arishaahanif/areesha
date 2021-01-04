var a = 10;
document.write("The value of a is:"+''+a);
document.write("</br>");

a++;
document.write("</br>"+"The value of a++ is:"+''+ a);
document.write("</br>");

++a;
document.write("</br>"+"The value of ++a is:"+''+ a);
document.write("</br>");

--a;
alert(b);
document.write("</br>"+"The value of --a is:"+'' + a);
document.write("</br>");

 a--;
document.write("</br>"+"The value of a-- is:"+''+ a );
document.write("</br>");

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("</br>"+"a is:" + a);
document.write("</br>");
document.write("b is:" + b);
document.write("</br>");
document.write("Result is"+result);
document.write("</br>");


 var names = window.prompt("Enter your name: ");
 alert("Your name is " + names);


const number = parseInt(prompt('Enter an integer: '));
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}





