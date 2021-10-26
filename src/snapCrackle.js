// Seu código vai aqui
function snapCrackle (maxValue){
    let n=1
    while (n<=maxValue){
    if (maxValue%2 !=0){//número ímpar
    console.log("Snap")}
    if (maxValue/5==0) {//múltiplo de 5
    if (maxValue%2 !=0) {//múltiplo de 5 e ímpar
    console.log(", Crackle")}
    console.log("Crackle")}
    if (maxValue%2!=0 && maxValue/5==0){//par e  múltiplo de 5
    console.log(", SnapCrackle")}
    if (maxValue%2==0 && maxValue/5!=0){//par e não múltiplo de 5
    console.log(maxValue)}
    n++}
    if(maxValue%n==0){//número primo
    console.log(", Prime")
    }}