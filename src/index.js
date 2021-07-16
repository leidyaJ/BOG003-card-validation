import validator from './validator.js';
//console.log(validator);
document.getElementById("buy").addEventListener ("click",() => {
    document.getElementById("pag2").style.display= "block";
    document.getElementById("pag1").style.display= "none";
    document.getElementById("correctVal").style.display= "none";
    document.getElementById("incorrectVal").style.display= "none";
  });

    const btnValidar=document.getElementById("validButton");
    btnValidar.addEventListener("click", ()=>{
    const creditCardNumber=document.getElementById("cardNumber").value;
    let re=validator.isValid(creditCardNumber);
    
    if (re){
        document.getElementById("pag2").style.display= "none";
        document.getElementById("correctVal").style.display= "block";
        validator.maskify(creditCardNumber);
        //document.getElementById.write('validación exitosa!!');

        
        
    }else{
        document.getElementById("pag2").style.display= "none";
        document.getElementById("incorrectVal").style.display= "block";
        //document.write('validación incorrecta!!');
       

    }
});



/* 
    document.getElementById("pag2").style.display= "none";
    document.getElementById("pag1").style.display= "none";
    document.getElementById("correctVal").style.display= "none";
    document.getElementById("incorrectVal").style.display= "none";});

//    button funtion for input validation

    const btnValidar=document.getElementById("validButton");
    btnValidar.addEventListener("click", ()=>{
    const creditCardNumber=document.getElementById("cardNumber").value;
    let re=validator.isValid(creditCardNumber);
    
    if (re){
        console.log('arbol'+ re);
        
    }else{
        console.log('flor'+ re);

    } */

    
//document.getElementById("validButton").addEventListener("click", ()=>{
        

    
    
   // validator.maskify(creditCardNumber);




 /* document.getElementById("validButton").addEventListener("click", ()=>{
    document.getElementById("pag2").style.display= "none";
    document.getElementById("pag1").style.display= "none";
    document.getElementById("correctVal").style.display= "block";
    document.getElementById("incorrectVal").style.display= "none";}) */