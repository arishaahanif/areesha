// chapter 5 

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

 var a = 3;
 var b = 5;

 var c = a + b;

 document.write("sum of 3 and 5 is" + ' ' + c);
 document.write("<br>");

 var a = 3;
 var b = 5;

 var c = a * b;

document.write("multiplication of 3 and 5 is" + ' ' + c);
 document.write("<br>");
 var a = 3;
 var b = 5;

 var c = a / b;

 document.write("division of 3 and 5 is" + ' ' + c);
 document.write("<br>");

var a = 3;
 var b = 5;

 var c = a % b;

 document.write("mod of 3 and 5 is" + ' ' + c);
 document.write("<br>");

 var a = 3;
 var b = 5;

 var c = a - b;

 document.write("subtraction of 3 and 5 is" + ' ' + c);
 document.write("<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.



// l. Output : “The remainder is : 0”
 var a;
 document.write("Value after variable declaration is" + ' ' + a);
 document.write("<br>");
 var a = 5;
 document.write("Initial value is"+ ' ' + a);
 document.write("<br>");
a = a + 1;

 document.write("Value after increment is"+ ' ' + a);
 document.write("<br>");
 a = a + 7;
 document.write("Value after addition is"+ ' ' + a);
 document.write("<br>");
 a--;
 document.write("Value after decrement is"+ ' ' + a);
 document.write("<br>");

 a = a % 3;

 document.write("The reminder is"+ ' ' + a);
 document.write("<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

 var movieTicket = 600;
 var buyingTicket = 5;

 var result = buyingTicket * movieTicket;

document.write("The total cost to buy 5 ticket to a movie is "+ ' '+ result + "PKR");


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

document.write("<br>");

 var a;
 var number = 4;
 document.write("The table of 4" + "<br>");
 for(i = 1; i <= 10; i++){
     a =  number * i;
    
     document.write(" "+ number + "*" + i + "=" +a+ "<br>");
 }

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var clTemp = 25;

 var F = (clTemp * 9/5) + 32;

 var F =( 25 * 9/5) + 32;

 document.write("25"+ '\xB0C is '+ F+ '\xB0F');

 document.write("<br>");

 var fTemp = 70;

 var C = (fTemp - 32) * 5/9;

 var C = (70 - 32) * 5/9;

 document.write("70"+ '\xB0F is '+ C+ '\xB0C');
 document.write("<br>");


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

 var itemOne = 650;
 var itemTwo = 100;
 var qOne = 3;
 var qTwo = 7;
 var charges = 100;
 var totalone = qOne * itemOne;
 var totaltwo = qTwo * itemTwo;
 var totalCost = charges + totalone + totaltwo;
 document.write("<h1>Shopping Cart</h1>");
 document.write("<br>");
 document.write("The price of item 1 is"+' '+ itemOne );
 document.write("<br>");
 document.write("the quantity of item 1 is"+ ' '+ qOne);
 document.write("<br>");
 document.write("The price of item 2 is"+' '+ itemTwo );
 document.write("<br>");
 document.write("the quantity of item 2 is"+ ' '+ qTwo);
 document.write("<br>");
 document.write("Shipping Charges"+ ' '+ charges );
 document.write("<br>");
 document.write("<br>");
 document.write("Total cost of your order is"+ ' '+ totalCost);
 document.write("<br>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

 var tmarks = 980;
 var mobtained = 804;
 var perc = ((mobtained/tmarks) * 100);
 document.write("<h1>Marks Sheet</h1>");
 document.write("<br>");
 document.write("Total marks:" + ' '+ tmarks);
 document.write("<br>");
 document.write("Marks Obtained:" + ' '+ mobtained);
 document.write("<br>");
 document.write("<br>");
 document.write("percentage:"+' '+ perc + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

 var usd = 10;
 var riyal = 25;
 var pkUsd = 104.80;
 var pkRiyal = 28;
 var tusdpkr = usd * pkUsd ;
 var triyalpkr = riyal * pkRiyal;
 var totalCurrency = tusdpkr + triyalpkr;

 document.write("<h1>Currency in PKR</h1>")
 document.write ("<br>");
 document.write("Total currency in PKR: "+ ' '+ totalCurrency );

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
 document.write ("<br>");


 var a = 3;

 var result = (a + 5) * 10 /2;

 document.write(result);
 document.write ("<br>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

     var year = 2021;
     var birthYear = 1998;
     var yearsOld = year - birthYear;
     document.write("<h1>Age Calculator</h1>");
     document.write ("<br>");
     document.write("They are either"+' '+ yearsOld + " or" + ' '+ (yearsOld-1) + " years old");
     document.write ("<br>");

//     12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


 var radius = 20;
 var cF = 2 * 3.124 * 20;
 document.write("The radius is"+ ' '+ radius);
 document.write ("<br>");
 document.write("The circumfences of a circle is"+ ' '+ cF);



 var radius = 20;
 document.write("radius is"+' '+radius);
 document.write ("<br>");

 var circumference = Math.PI * 2*radius;
 document.write("The circumference is " + circumference);
 document.write ("<br>");
 var area = (Math.PI * radius*radius).toFixed(1);
 document.write("area is"+ area);
 document.write ("<br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

 var snack = "chocolate";

 var age = 22;
 var maxAge = 50;
 var esamount = 2;

 var totaleat = (esamount * maxAge) * (age - maxAge);

 document.write("totaleat" + totaleat);
 var snack = "chocolate";
 var age = 22;
 var maxAge = 50;
 var numPerDay = 2;
 var totalNeeded = (numPerDay * 365) * (maxAge - age);
 var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
 document.write(message);

 document.write("<br>");
 document.write("<br>");

