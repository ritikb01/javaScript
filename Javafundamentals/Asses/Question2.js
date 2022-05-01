var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
//fill your code

function checkPrime(input){
    let num=Number(input);

    if(num<2){
        return false;
    }

    for(i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

if(checkPrime(input)){
    console.log('Prime');
}else{
    console.log('Not Prime');
}
