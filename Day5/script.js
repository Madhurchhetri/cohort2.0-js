// // alert("hii")

//  1. Basic Operators Arithmetic, Assignment, Increment, Decrement, 
// Comparison, Logical, Bitwise)
//  a. Create two numbers a = 10 and b = 3.
//  Perform and log: a + b, a - b, a * b, a / b, a % b.

    // solve : 

    // let a= 10;
    // let b= 3;
    // console.log(a+b); op : 13
    // console.log(a-b); op: 7
    // console.log(a*b); op : 30
    // console.log(a/b); op : 33.33
    // console.log(a%b); op : 1
    
//  b. Write: let x = 5; x = x + 3;
//  Now rewrite the same using +=.
//  Do the same for -=, *=, /=.
    
    // solve :

    // let x = 5;
    // x = x + 3; op: 8
    // x += 2; op: 10
    // x -= 2; op : 8
    // x *= 2; op : 16
    // x /= 2; op : 8
    // console.log(x);
    
//  c. let count = 5;
//  Use count++ and log value before and after.
//  Repeat for count–.

    // solve :

    // let count = 5 ; 

    // console.log(count++);
    // console.log(count--);
    
    


//  d. Compare two values: 5 == “5ˮ and 5 === “5ˮ.
//  Observe difference. 

// solve :

// console.log(5 == "5"); op : true
// console.log(5 === "5"); op : false 


//  e. Check if 10 is greater than 5, less than 20, and equal to 10.

// solve :

// if(10>5 && 10<20 && 10===10){
//     console.log(true);
    
// }else{
//     console.log(false);
    
// }
//  f. Try logical AND and OR
//  true && false
//  true || false
//  !(true)  

//  solve :

// console.log(true && false); op : false
// console.log(true || false); op : true 
// console.log(!(true)); op : false





//  g. Predict the result of:
//  (5 > 3 && 10 > 8),
//  (5 > 3 || 10 < 8)
     
// solve :

// console.log((5 > 3 && 10 > 8)); op : true
// console.log((5 > 3 || 10 < 8)); op : true


//  h. Bitwise (light intro):
//  Evaluate 5 & 1 and 5 | 1.
//  Write result and your observation (no deep explanation needed now).

//  2. Variable Hoisting in JavaScript

//  a. Predict output of:
//  console.log(a);
//  var a = 10

// solve : 
 
// console.log(a); op : undefined
//  var a = 10


// b. Predict output of:
//  console.log(b);
//  let b = 10

// solve :

//  console.log(b); op : cannot access before initialization
//  let b = 10

//  c. Predict output of:
//  test()
//  function test() { console.log(“Helloˮ) }

// solve :

//  test()
//  function test() { 
//     console.log("hello") 
// }
// op : hello because this is decleration function here we can use the hoisting

//  d. Try writing a function expression before initialization and call it:
//  hello()
//  var hello = function() { console.log(“Hiˮ) }
//  Write what happened and why.

// solve :

//  hello()
//  var hello = function() {
//      console.log("Hi") 
//     }
// op : hello is not a function

    // because here we function stored in variable which we called "function expression" all of this action aand that's why we cannot use hoisting in function expression 


//  e. Write one sentence:
//  What gets hoisted?
//  What does not get hoisted fully?

// solve :

            //  What gets hoisted?

        // function test(){}, Ye poora function upar chala jata hai, matlab use declare se pehle bhi call kar sakte ho.
//         var x = 10; var ka naam upar chala jata hai, lekin value nahi.
// Jab tak value assign nahi hoti, wo undefined hota hai. 

            //  What does not get hoisted fully?

//             let a = 10;
//             const b = 20; Inka na naam upar available hota hai, na value.
// Agar pehle access kiya → ReferenceError aata hai (Temporal Dead Zone).

// var fn = function() {}
// let fn2 = () => {} Ye variables ki tarah treat hote hain, poora function hoist nahi hota.



//  3. Conditional Operators (if, else, else-if, ternary, switch)
//  a. Take input using prompt for age.
//  If age > 18 -> log “Adultˮ.
//  Else → log “Minorˮ.

// solve : 

// let age = Number(prompt("enter your age"));
// if(age >= 18){
//     console.log("adult");
    
// }else if(isNaN(age)){
//     console.log("please enter the valid number");
    
// }
// else{
//     console.log("minor");
    
// } 

// op : adult

//  b. Write a program:
//  If marks >= 90 -> “A gradeˮ
//  Else if marks >= 75 -> “B gradeˮ
//  Else if marks >= 50 -> “C gradeˮ
//  Else → “Failˮ

// solve : 

//    let marks = 55; 

//    if(marks>=90){
//     console.log("A grade");
    
//    }else if(marks >= 75){
//     console.log("B grade");
    
//    }else if(marks>=50){
//     console.log("c grade");
    
//    }else{
//     console.log("fail");
    
//    }
//  op : c grade

//  c. Create a variable city = “Bhopalˮ.
//  If city is “Bhopalˮ → log “MPˮ
//  Else if city is “Delhiˮ → log “Capitalˮ
//  Else → log “Unknown Cityˮ 

// solve : 

// let city = "delhi";
// if(city === "bhopal"){
//     console.log("MP");
    
// }else if (city === "delhi"){
//     console.log("capital");
    
// }else{
//     console.log("unknown city");
    
// }

//  d. Use ternary operator:
//  Let score = 40.
//  If score > 35 -> “Passˮ else “Failˮ using a ternary.

// solve : 

// let score = 40;

// console.log(score > 35 ? "pass" : "fail");


//  e. Convert this if-else into a ternary:
//  if (temperature > 30) { “Hotˮ } else { “Pleasantˮ }

// solve :
    // let temperature = 38
    // let result = temperature > 30 ? "Hot" : "Pleasent" 
    // console.log(result);
    
    

// f. Write a switch case:
//  Take day number 1 to 7.
//  Print the day name.
//  Default case: “Invalid Dayˮ.

// solve :

// let num= 5;

// switch (num) {
//     case 1:
//         console.log("sunday");
//         break;

//         case 2:
//         console.log("monday");
//         break;

//         case 3:
//         console.log("tuesday");
//         break;

//         case 4:
//         console.log("wednesday");
//          break;
//         case 5:
//             console.log("thursday");
//              break;
//             case 6:
//                 console.log("friday");
//                  break;
//                 case 7:
//                     console.log("saturday");
//                     break;
//     default:
//         console.log("Invalid Day");
//         break;
// }

//  g. Using logical operators in condition:
//  If age > 18 and country == “Indiaˮ → log “Eligible for Voteˮ
//  Else → “Not Eligible"

// solve : 

// let age = 19;
// let country = " india";
// if(age>18 && country === " india"){
//     console.log("eligble for vote");
    
// }else{
//     console.log("Not eligible");
    
// }