const validator = {
  isValid:(creditCardNumber)=>{
    //***split and inverse of the character string***
    let creditCardNumber1=creditCardNumber.split("").reverse();// taking the number, split and reverse the position, tomo el número, lo divido e invierto la posición
    let numCaracthers= creditCardNumber.length;// obtengo la longitud cadena de caracteres
     
    let sumtotal=0;//total add
    let sumOdd =0;// odd numbers add
    let sumPair=0;// pairs numbers add

    //console.log('entrada '+ creditCardNumber1);

    //number test 4083952015263
    for (let i = 0; i < numCaracthers; i++) {
      let numbers=parseInt(creditCardNumber1[i]);  
      if (i%2==0){    
        //console.log('impares '+ numbers);           
        sumOdd+=numbers;
      } 
      else if (i%2==1){
        //console.log('pares '+numbers);
        numbers= numbers*2;
        //console.log('pares '+numbers); 
        if (numbers<10){
          let sumPairMenor= numbers
          sumPair+= sumPairMenor;
          //console.log('sum pares menores a 10 '+ sumPair);
        } else {
          let pairMayor=numbers;
          //console.log('numeros pares mayores ' + pairMayor);
          pairMayor=(pairMayor-10)+1;
          //console.log('suma de digitos ' + pairMayor);
          sumPair+=pairMayor;
          } 
      }//console.log('suma total '+ sumPair);
    }
    sumtotal=sumOdd+sumPair;
    //console.log(sumtotal);
    
    if (sumtotal%10==0){
       return true;

      //document.write('validación de tarjeta exitosa');   
      
    }else{
      return false;
      //document.write('validación de tarjeta erronea');      
    }
    
    },//close isValid method 

    // starting the maskify method
  maskify:(creditCardNumber)=>{
    let longitude= creditCardNumber.length;// get the longitude of the string
    let maskifyNum="";// declarate a void variable
    for(let i=0;i<longitude-4; i++){
      maskifyNum+="#";// put the symbol # in each one position  of the string, left the last four positions 
    }// end the cycle FOR 
      return maskifyNum + creditCardNumber. substring(longitude-4,longitude);
  }//close maskify method
}
export default validator;
