let attempt = 0;
let sahipassword = "madhur";
let userpassword = prompt("enter your password");
attempt++

while(sahipassword !== userpassword){
    if(attempt === 3){
        console.log('account locked');
        
        break;
    }
    userpassword = prompt("enter your password");
    console.log(userpassword);
        attempt++;
    
}