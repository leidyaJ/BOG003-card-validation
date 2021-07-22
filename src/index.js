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
        //validator.maskify(creditCardNumber);
        document.getElementById("showAns").innerHTML = "Tu tarjeta número: " + validator.maskify(creditCardNumber) + " " + "   es valida";
        //document.getElementById.write('validación exitosa!!');
        document.getElementById("continueButton").addEventListener ("click",() => {
            alert('GRACIAS POR REALIZAR TU COMPRA');})
            
        

        
        
    }else{
        document.getElementById("pag2").style.display= "none";
        document.getElementById("incorrectVal").style.display= "block";
        document.getElementById("showAnsIn").innerHTML = "Tu tarjeta número: " + validator.maskify(creditCardNumber) + " " + "   es invalida";
        //document.write('validación incorrecta!!'); 
        document.getElementById("incorrectVal").addEventListener ("click",() => {
            document.getElementById("cardNumber").value = "";
            document.getElementById("pag2").style.display= "block";
            document.getElementById("incorrectVal").style.display= "none";})
            
           

    }
});



