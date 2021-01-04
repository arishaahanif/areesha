
// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var arr1 = [];

// Declare and initialize a strings array

// var arr = ["ammar", "yousuf", "abrahani"];

// Declare and initialize a numbers array.

// var numbers = [13, 20,  15, 16];

// 5. Declare and initialize a boolean array.

// var boolean =[true, false];

// 6. Declare and initialize a mixed array.

// var arr = ["ammar", 15, true];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var education = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h1>Qualification</h1>")

// for (i=0;i<education.length; i++){
//     document.write(" "+ education[i] + "<br>");
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stuname = ["ammar", "nabeel", "zohaib"];

// var score = [320, 230, 480];

// var totalmarks = 500;
// var per;
// for(var i=0; i<stuname.length; i++){
//     document.write("score of " +stuname[i]  + " is:" +score[i] );
//     per = ((score[i]/totalmarks * 100)).toFixed(0);
//     document.write(" percentage: "+ per + " % " + "<br>");
// }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["red","green","blue","yellow"];

// var userclr1 = prompt("Enter the color and add to the beginning of array");
// var userclr2 = prompt("Enter the color and add to the beginning of array");
// var userclr3 = prompt("Enter the color and add to the beginning of array");
// var userindex = +prompt("Enter a index number","enter a second index ");
// colors.unshift(userclr1);
// colors.unshift(userclr2);
// colors.unshift(userclr3);
// colors.shift(userclr1);
// colors.pop();
// colors.slice(userindex);
// //  var newarry = colors;

// for (var i=0; i<colors.length; i++){
//     document.write("  " + colors[i]   + "  ");
//     // document.write("<br>");
//     // document.write("" + colors[i] +  "<br>");

// }
// document.write ("<h1>pop</h1>")
// document.write("" + colors + "<br>");


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var score = [320, 230, 480, 120];
// document.write("score " +score);
// document.write("<br>")
// score.sort();
// document.write("ordered scores of students:");
// for(var i=0; i < score.length; i++) {
//     document.write(" " +score[i]);
// }

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write(" <h1>Cities list:</h1> ")

// document.write(" " + cities);

// cities = cities.slice(2 , 4);
// document.write(" <h3>Selected cities list:</h3> ")
    
// document.write(" " + cities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", " is ", " my ", " cat"];
// document.write("Array: "+ "<br>");

// document.write(" "+arr);
// document.write("<br>")
// document.write("<br>")

// document.write("String:  ");

// document.write("<br>")
// var b = arr.join(" ");
// document.write(""+ b  );

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
