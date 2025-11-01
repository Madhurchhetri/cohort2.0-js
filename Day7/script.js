// alert("hii")

// for(let i = 1; i < 21; i++){
//    if(i % 2 === 0){
//     console.log(i);
    
//    }
// }


// for(let i = 10; i > 0; i--){
//     console.log(i);
    
// }

// for(let i = 1; i<6; i++){
//     console.log(`yes ${i}`);
    
// }

// for(let i=1; i<11; i++){
//     if(i % 2 === 0){
//         console.log(` ${i} - even`);
        
//     }else{
//         console.log(`${i} - odd `);
        
//     }
// }

// important : jab bhi prompt se kuch mangenge toh woh string me dega agr number maangre ho toh prompt ke aage + laga do

// let num = Number(prompt("enter number"));

// if(num>=0){
//     console.log(`it is positive number ${num}`);
    
// }else{
//     console.log(`it is negative number ${num}`);
    
// }


let age = prompt("enter your age");
 if(age === null){
    console.log(`you clicked cancel`);
    
}else if(age.trim() ===""){
    console.log('age bata de number me bsdk bakchodi karra');
    
}else{
    let Age = Number(age)
    if(isNaN(Age)){
        console.log("Number mein likh bsdk, text kyun daal raha?");
        
    }
    else if(Age >= 18){
        console.log(`you are eligible and you can vote because your age is  ${Age}`);
        
    }else{
        console.log(`you cannot vote, you are minor `);
        
    }
    
}