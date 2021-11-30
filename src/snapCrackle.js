function snapCrackle (maxValue){
    let n=""
    for(let number=1; number<=maxValue;number++){
        if (number %2 !==0 && number %5 ==0){       //número ímpar e que não seja múltiplo de 5
            n += "Snap, "
        }
        else if(number %5 === 0 && number %2 === 0){   //número múltiplo de 5 e que seja par
            n += "Crackle, "
        }
        else if(number %5 === 0 && number %2 !== 0){  //número múltiplo de 5 e que seja ímpar
            n += "SnapCrackle, "
        }
        
        else if(number%2 === 0 && number%5 !==0){     //número nem ímpar e nem múltiplo de 5
            n+= ", "  
        }
    }
    console.log(n)
}
snapCrackle(12)

/* Atividade bônus - Número primo*/

function snapCracklePrime (maxValue){
    let n=""
    for(let number=1; number<=maxValue;number++){
        if(number %2 !==0 && number %5 ==0){        //número ímpar e que não seja múltiplo de 5
            if (isPrimeNumber(number)) {
                n += "SnapPrime, "
            }
            else{
                n += "Snap, "
            }
        }
        else if(number %5 === 0 && number %2 === 0){   //número múltiplo de 5 e que seja par
            if (isPrimeNumber(number)) {
                n += "CracklePrime, "
            }
            else {
                n += "Crackle, "
            }
        }
        else if(number %5 === 0 && number %2 !== 0){  //número múltiplo de 5 e que seja ímpar
            if (isPrimeNumber(number)) {
            n += "SnapCracklePrime, "
            }
            else {
                n += "SnapCrackle, "
            }
        }
        else if(number%2 === 0 && number%5 !==0){     //número nem ímpar e nem múltiplo de 5
            if (isPrimeNumber(number)) { 
            n+= "Prime, "
            }
            else{
                n+= ", "  

            }  
        }


    }
}