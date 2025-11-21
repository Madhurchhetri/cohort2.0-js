// setTimeout for delay and these are async function

// console.log('hello1');

// setTimeout(()=>{
//     console.log('hello 2');
    
// },3000)

// console.log('hello 3');

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");

// btn.addEventListener('click',()=>{
//     h1.innerHTML = 'changing....';

//     setTimeout(()=>{
//         h1.innerHTML = 'I am a developer'
//     },2000)
// })

// setInterval for controlled Loop 

// let a = 0;

// let int = setInterval(()=>{
//     a++;
//     console.log(a);
    
// },100)

// setTimeout(()=>{
//     clearInterval(int);
// },5000)

let grow = 0;

let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner')

btn.addEventListener('click',()=>{
    // console.log('hello');
    btn.style.pointerEvents='none';
   let int = setInterval(()=>{
    grow++;
    // console.log(grow);
    h2.innerHTML = `${grow}%`;
    inner.style.width = `${grow}%`;
    
   },50)

   setTimeout(()=>{
    clearInterval(int);
    btn.innerHTML = "Downloaded";
    btn.style.opacity= .9;
   },5000)
    
})