// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

//  var arr = [
//      []
//  ];

//  var arr = [
//      [0,1,2,3],
//      [1,0,1,2],
//      [2,1,0,2]
//  ];

//   for (var a =0; a<4; a++) {
//      for (var b = 0; b < 4; b++){
//          document.write(" "+arr[a][b] + "  ");
//       }
//      docfument.write("<br>")
//   }


// 3. Write a program to print numeric counting from 1 to 10.

//   for (i =0; i<=10; i++) {
//       document.write(" "+[i]+ "<br>");
//   }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


//   var length = prompt("Enter your length");
//   var no =  prompt("Enter your no");
//   var a;
//   for (i =1; i<=length; i++) {
//       a= no * i;
//       document.write(" "+no+ "*" +i+ "="+a+ "<br>");
//   }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

//   var  fruits = ["apple", "banana", "mango", "orange", "strawberry"];

//   for (i =0; i<fruits.length; i++) {
//       document.write("Elementa at index " +[i] +  " is  " +fruits[i] + "<br>");
//   }


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

//   var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

//   var search = prompt("searching");

//   for (i =0; i<arr.length; i++) {
//       if(search === arr[i]){
//           document.write(" "+search + " is available at index" +[i]+ "in our bakery");
//       }
//       else {
//           document.write("not avalble");
//       }
//   }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12]


//   var array = [24 , 53, 78, 91];
//   var largest= 0;

//   for (i=0; i<=largest;i++){
//       if (array[i]>largest) {
//            largest=array[i];
//       }
//   }




//   document.write(largest);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

//   var array = [24 , 53, 78, 91, 12];
//   var small= 93;

//   for (i=0; i<=small;i++){
//       if (array[i]<small) {
//            small=array[i];
//       }
//   }




//   document.write(small);


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

//  for (i=0; i<=100;i++){
//       if (i%5===0) {
//           document.write(" "+ i);
//       }
//  }