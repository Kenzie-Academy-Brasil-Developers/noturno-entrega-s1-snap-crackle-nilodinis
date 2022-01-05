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
/* A lógica usada foirepetir os códigos da função normal, acrescentando a verificação de primo ou não*/

function snapCracklePrime (maxValue){
    let n=""
    divisor=0
    for(let number=1; number<=maxValue;number++){
        if(number %2 !==0 && number %5 ==0){        //número ímpar e que não seja múltiplo de 5
            for( contador=1;count<=maxValue; contador++){// Não sei se fiz correto, a ideia é gerar um loop em que o número primo será identificado caso seja dividido por 1 e por ele mesmo
                if(number % contador==0){
                    divisor++
                }
                if( divisor==0){
                    n += "SnapPrime, "
                }
                else{
                    n += "Snap, "
                }
            }
        }
        else if(number %5 === 0 && number %2 === 0){   //número múltiplo de 5 e que seja par
            for( contador=1;count<=maxValue; contador++){// Não sei se fiz correto, a ideia é gerar um loop em que o número primo será identificado caso seja dividido por 1 e por ele mesmo
                if(number % contador==0){
                    divisor++
                }
                if( divisor==0){
                    n += "CracklePrime, "            
                }
                else{
                    n += "Crackle, "                   
                }
            }
            
        }
        else if(number %5 === 0 && number %2 !== 0){  //número múltiplo de 5 e que seja ímpar
            for( contador=1;count<=maxValue; contador++){
                if(number % contador==0){
                    divisor++
                }
                if( divisor==0){
                    n += "SnapCracklePrime, " 
                }
                else{
                    n += "SnapCrackle, "
                }
            }
         }
        else if(number%2 === 0 && number%5 !==0){     //número nem ímpar e nem múltiplo de 5
            for( contador=1;count<=maxValue; contador++){
                if(number % contador==0){
                    divisor++
                }
                if( divisor==0){
                    n+= "Prime, "
                }
                else{
                    n+= ", "
                }
            }
             
        }


    }
}