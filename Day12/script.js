// pure function: 

// let a = 12;

// function abcd(val){
//     console.log(val + 2);
    
// }
// abcd(12);

// impure function :

// let a = 12;
// function abcd (val){
//     a += val;
//     console.log(a);
    
// }
// abcd (12)

// understand closures, scoping rule 

// closure : ek function jo return karta hain ek or function ko and parent function variable ko use karega

// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);       
//     }
// }
// abcd()();


// .................................Arrays ............................

// let arr = [1,3,5,2,6,7,8,3]

// console.log(arr[5]);

// function on array : [ push , pop , shift, unshift, indexOf, array destructuring , filter , some, map, ]

// let arr = [1,2,3,4,5]
// arr.push(6)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(1)
// console.log(arr);

// let [a,b] = arr;
// console.log(a,b);

// let arr2 =arr.filter(function(val){
//     return val<3
// })
// console.log(arr2);

// itreating over arrays usin - ['for-loop , forEach']

let arr = [1,2,3,4]
// arr.forEach(function(val){
//     console.log(val);
    
// })

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    
}





