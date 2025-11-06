// let count =0;
// for(let i=1; i<=20; i++){
//     if(i%2 !==0){
         
//         count++; 
//         console.log(i);
       
//     }
//     if(count === 3){
//         break;
//     }
// }
// console.log(count)

// let count = 0;
// let positiveNumber = 0 
// let negativeNumber = 0;
// for(let i=1; i<=5; i++){
//     let number = +prompt("enter number");
//     count++;
//     console.log(number);
    
//     if(number>=0){
//         positiveNumber++;
//         console.log(`these are the positive number ${number}`);
        
//     }
//     if(number<0){
//         negativeNumber++;
//         console.log(`these are the negative number ${number}`);
        
//     }
// }
// console.log(`positive number are ${positiveNumber} and negative number are ${negativeNumber}`);

// let attempt = 3;
// let balance = 5000;

// for(let i=1; i<=attempt; i++){
//     let amt = +prompt(`enter your amount Note : you have 3 attempt limits ${i} / ${attempt} : `)
//     if(isNaN(amt)){
//         console.log(`you entered wrong key please enter the number `);
//         break;
        
//     }else if(amt === null){
//         console.log(`you cancelled it`);
//         break;
        
//     }else if(amt>=0 && amt<1000){
//         console.log(`enter the amount start with 1000rs`);
//         break;
        
//     }else if(amt<=balance && amt>=1000){
//         console.log(`please collect your amount ${amt}rs.`);
//         break;
        
//     }else{
//         console.log(`you have Insufficient balance`);
//     }

// }

// let attempt = 3;
// let balance = 1000
// let total = 0;

// for(let i=0; i<attempt ; i++){
//     let amt = +prompt(`enter your amount ${attempt} - ${attempt-i}  : `)
//     total += amt;
//     balance = balance - amt
//     if(amt<1000){
//     console.log(`you have reciev the amount is ${counter} and balance is ${balance}`);}
//     if(amt == null){
//         console.log('you cancelled it');
//         break;
//     }
//     if (amt<=0){
//         alert(' please enter the amount');
        
//     }
//     if (amt > 1000){
//         console.log('you have inssufficient balance');
//         break;
        
//     }

// }


// ..........................Recursion in javascript...........................

// function abcd(){
//     console.log('hey');
//     abcd()
// }
// abcd()

// function abcd(n){
//     if(n === 0) return;
//     console.log(n);
    
//     abcd(n-1);
// }
// abcd(5)

//...................... break and continue in loop..............

// for(let i =1; i<10; i++){
//     // if(i===5) break;
//     // if(i === 5) continue;
//     console.log(i);
    
// }   

//......................... function in javascript.............

// code likhte hi chal jata hain isliye function banate hain jab hum bole tab code chale or use kitni baar bhi chala de

// function KhanaKhaao(){
//     console.log('thaali uthao');
//     console.log('thaali me khana daalo');
//     console.log('ab khana khaao or pet bhar lo');
//     console.log(' ab haath dho lo ');
// }
// KhanaKhaao();
// KhanaKhaao();

// function doSomething(name,age,email){
//     console.log(arguments[1]);
    
// }
// doSomething("madhur",25,"test@test.com")