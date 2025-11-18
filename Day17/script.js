// create element and append child  .......

// let h1 = document.createElement("h1");
// console.log(h1);

let btn = document.querySelector("button");
let main = document.querySelector("main");
let arr = ["hi","i'm madhur", "i'm a master of frontend Developer", " i learned from Sheryians coding school"]
btn.addEventListener("click",()=>{
    // let h1 = document.createElement('h1');
    // h1.innerHTML = " madhur hi I'm from Js"
    // let div = document.createElement('div');
    let h1 = document.createElement('h1');

    let x = Math.random()*80;
    let y = Math.random()*80;
    // let c1 = Math.floor(Math.random()*256);
    // let c2 = Math.floor(Math.random()*256);
    // let c3 = Math.floor(Math.random()*256);
    let r = Math.random()*361;
    let scl = Math.random()*3;

    // h1.style.width = '50px';
    // h1.style.height = '50px';
    // div.style.backgroundColor =`rgb(${c1},${c2},${c3})`;
    let a = arr[Math.floor(Math.random()*arr.length)]
        h1.innerHTML = a;
    h1.style.position = 'absolute';
    h1.style.top = `${x}%`;
    h1.style.left = `${y}%`;
    h1.style.rotate = `${r}deg`;
    h1.style.scale = `${scl}`;
    h1.style.whiteSpace = "nowrap";
    main.appendChild(h1);
})
