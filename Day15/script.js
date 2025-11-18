// Dom : doccument object model frontend ki js 

// Dom 4 pillars 
// 1. selsction of elements 
// 2. Changing Html
// 3. Changing css 
// 4. event listners

let h = document.querySelector('h1')
let hh = document.querySelector('h2')
console.log(h);
console.log(hh);

h.innerHTML = " this is Dom Class Day 1";
h.style.textTransform = "capitalize"
h.style.cursor = "pointer"

let box = document.querySelector('.box');
box.innerHTML = " hey hey"
box.style.backgroundColor = "blue"

h.addEventListener("dblclick",function(){
    console.log("hello");
    
})
let btn = document.querySelector('button');

btn.addEventListener("click",function(){
    hh.innerHTML = "kaise ho"
})