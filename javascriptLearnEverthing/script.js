// Primitive vs Reference
// 1. let x = 5; let y = x; y = 10; console.log(x, y)
// 2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”;
// console.log(obj1.name)
// 3. Observe which one changes together.
// 4. Draw memory boxes on paper to visualize difference.


// option 1
// let x=5;
// let y=x;
// y=10;
// console.log(x,y);

// // option 2
// let obj1 = {
//     name: "harsh"
// }
// let obj2 = obj1;
//      obj2.name = "sheriyans"; 

//      console.log(`obj1 ${obj1.name}`);
//      console.log(` obj2 ${obj2.name}`);
     
//  ANS Option 2 change together because This is Reference Data type where we cannot direct copy if we change into object 2 value , then object 1 will be also change      





// ..................................................START..................................

// How many data type in javascript
// * mainly two types of data type 1. primitive 2. refrence 
// * primitive data they are not brackests . we can copy in other variable example in below

// let a = 12;
//  let b= a;
        // b= b-a
//  console.log(a); op = 12
//  console.log(b); op = 0

// it's mean now a has a value and b has also own value which that copy of a but it's has own value by the way primitve has data in string, boolean, number,null, bigints, symbols, undefined

// Refrence data : they are in brackets and  we are not copy they just have a refrence of original variable example in below:

//  let a = [1,2,3];
//  let b = a;
//   b= b.pop();
  
//   console.log(a); op = [1,2]
//   console.log(b); op = [1,2]
  
// it's mean we just a refrence of variable a we are not copy and variable b has not own value if we some action on variable b then variable a also change and refrence data like in array , objects and function.

// let a = "madhur" : this is string 
// let a = 12 :  this is Number
// let a = true, false  : this is boolean
// let a ; : this is undefined
// let a = null : this is null
// let a = symbol ("uid") : this is a symbol
// let a  = 88454544855151548485148485n : this is BigInt


// * coercion :  ye ek concept hain jisme apka ek type automatically convert ho jayega 

// let a = "5"
// let b = 1

// console.log(a+b); op = "51"
// console.log(a-b); op = 4

// yaha ye first console me ye hora hain if we add string and number then value will be concatinate but if we did substract then ans will be number  beacuse js think that happen beacause of coercion

// truthy vs falsy : ( 0 ,false , "" , null , undefined , NAN ,doccument.all ) they always falsy in javascript  and rest all : true;
// NaN  number kyu hain : kyuki nan ek failed number operation hain jab bhi koi failed operation hoga uska type humesa number hoga



// for(let i=1; i<=20; i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i);
    
// }

// let i = 1;
// while(i<=20){
    
//     if(i%2 === 0){
//         console.log(i);
//     }
//     i++;
// }

// let sum =0;

// for(let i=1; i<=10; i++){
//     // console.log(i);
//     sum = sum + i;
    
// }
// console.log(sum);
// let count = 0;
// for(let i =10; i<=20; i++){
//     count++;
    
// }
// console.log(count);


// let num = prompt('enter the number');
// let isPrimneNumber = true;

// for(let i = 2; i<num; i++){
//     if(num % i === 0){
//         isPrimneNumber = false;
//         console.log(i);
        
//     }
// }
// if(isPrimneNumber === true){
//     console.log(`${num} is a prime number`);
    
// }else{
//     console.log(`${num} is not a prime number`);
    
// }

// let num1 = 0;
// let num2 = 1;
// let count = 0;
// for(let i=0 ; i<=10; i++){
//     count++;
//    let next = num1 + num2;
//     console.log(next);
//    num1 = num2;
//    num2 = next
//   if(count === 7){
//     break;
//    }
    
// }


// for(let i=1; i<=4; i++){
//     let pattern = "";
//     for(let j=1; j<=i; j++){
//         pattern +="*"
//     }
//     console.log(pattern);
    
// }

// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//      console.log(`Step ${i}: ${fact} × ${i} = ${fact * i}`);
//   fact *= i;
  
  
// }

// console.log(`Factorial of ${num} is: ${fact}`);


  
 