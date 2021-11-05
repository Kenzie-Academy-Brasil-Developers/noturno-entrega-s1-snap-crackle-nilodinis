function snapCrackle (maxValue){
    let n=""
    for(let number=1; number<=maxValue;number++){
        if (number%2 !==0){       //número ímpar
            n += "Snap, "
        }
        else if(number%5 ===0){   //número múltiplo de 5
            n += "Crackle, "
        }
        else if(number%2 !==0 && number%5 ===0){   //número ímpar e múltiplo de 5
            n += "SnapCrackle, "
        }
        else if(number%2 ===0 && number%5 !==0){     //número nem ímpar e nem múltiplo de 5
            n+= ", "  
        }
    }
    console.log(n)
}
snapCrackle(12)