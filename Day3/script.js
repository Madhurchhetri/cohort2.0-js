// alert("Hello Sheryians")

// 3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what
// // is JS?

// Js = brain to engage with user 

// 4. Write one example of where you’ve seen JS being used (like popup,
// animation, etc.)
// Ans : // alert("Hello Sheryians")

// Running JS in Browser Console

// 1. Open console and type: 2 + 2
// 2. Type: alert(“Hi”)
// 3. Try: prompt(“Your name?”)
// 4. Type: let city = “Bhopal”; city

// Ans : 

// let a = 2+2;
// console.log(a);

// alert("hii");

// let username = prompt ("Enter your name");
// console.log(username);

// let city = "Dehradun";
// console.log(city);


// Variables and Keywords (var, let, const)

// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c
// = “School”
// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
// 3. Create a variable inside curly braces using let and log it outside.
// 4. Predict output before running.
// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)

// Ans : 

// var a = "harsh";
// let b= "sheryians";
// const c = "school";

// a="madhur";
// b= "sheryians2";
// // c="schhool3"

// console.log(a); op : update
// console.log(b); op : update
// console.log(c); op :  Assignment to constant variable.


// Logging and Interaction (console, alert, prompt)

// 1. Log name, age, and city using console.log, console.info, console.warn.
// 2. Use prompt to take user’s name → alert a welcome message.
// 3. Log typeof of user’s input.
// 4. Try: let age = p

// ANS :

// let names = "madhur";
// let age = 25;
// let city = "dehradun";

// console.log(names);
// console.info(age);
// console.warn(city);

// let username = prompt("enter your name");
// let userage = prompt ("enter your age");
// alert(`Hii ${username} welcome to js. i think your age is ${userage}`)

// console.log(`username : ${typeof(username) }, age : ${typeof(userage)}`);


// Working with Strings

// 1. let msg = “I love Sheryians”;
// 2. Try msg.slice(2, 6) and predict the result.
// 3. Try msg.split(” “) and count words.
// 4. Try msg.replace(“love”, “study at”).
// 5. Template string example: let name = “Harsh”; console.log(Hey ${name},
// welcome to JS!)
// 6. Check if msg.includes(“love”)

// Ans :

// let msg = "I love Sheryians";

// console.log(msg);

// console.log(msg.slice(2,6)); op : love
// console.log(msg.split(" ")); op :  ['I', 'love', 'Sheryians']
// console.log(msg.replace("love", "study at")); op: I study at Sheryians
// console.log(msg.includes("love")); op : true


// Special Values

// 1. Log 1 / 0, 0 / 0, Number(“abc”), undefined + 1
// 2. Write what appears (Infinity, NaN, etc.)
// 3. Write one line explaining when to use null vs undefined.

// ANS

// console.log(1/0); op : Infinity
// console.log(0/0); op : Nan
// console.log(Number("abc")); op : Nan
// console.log(undefined + 1); op : Nan

// Primitive vs Reference

// 1. let x = 5; let y = x; y = 10; console.log(x, y)
// 2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”;
// console.log(obj1.name)
// 3. Observe which one changes together.

// ANS

// let x = 5;
// let y = x;
// y=10;
// // console.log(x, y); op:(5,10)

// let obj1 = {
//     name : " madhur",
//     age : 25
// }
// let obj2 = obj1;
//     obj2.name = "Madhur"
// console.log(obj2);
// console.log(obj1);

// second one change together because this is refrence Data type thats why we can't direct copy of variable here we change the value obj2.name thats why obj1 also change 

// let arr1 = [1,2,3,4]
// let arr2 = arr1;
// arr2.pop()
// console.log(arr2);
// console.log(arr1);
 
// This iS Premitive Data

// let a = "madhur";
// let b= a;
// b= "Madhur"

// console.log(b);
// console.log(a);










