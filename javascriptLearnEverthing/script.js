// Primitive vs Reference
// 1. let x = 5; let y = x; y = 10; console.log(x, y)
// 2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”;
// console.log(obj1.name)
// 3. Observe which one changes together.
// 4. Draw memory boxes on paper to visualize difference.


// option 1
let x=5;
let y=x;
y=10;
console.log(x,y);

// option 2
let obj1 = {
    name: "harsh"
}
let obj2 = obj1;
     obj2.name = "sheriyans"; 

     console.log(`obj1 ${obj1.name}`);
     console.log(` obj2 ${obj2.name}`);
     
//  ANS Option 2 change together because This is Reference Data type where we cannot direct copy if we change into object 2 value , then object 1 will be also change      