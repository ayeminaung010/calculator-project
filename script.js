
let Answer = document.getElementsByClassName("outPut")[0];
let btnCalculate = document.getElementsByClassName("calculator")[0];
let firstError = document.getElementById("firstError");
let secondError = document.getElementById("secondError");
let operatorError = document.getElementById("operatorError");


let numOneStatus, numTwoStatus, operatorStatus = false;

firstError.style.display = "none";
secondError.style.display = "none";
operatorError.style.display = "none";


let finalResult;
btnCalculate.addEventListener("click", function() {
    
    let num1 = document.getElementsByClassName("firstNo")[0];
    let num2 = document.getElementsByClassName("secondNo")[0];
    let operator = document.getElementsByClassName("selection")[0];

    checkValidation(num1,num2,operator);
    if(numOneStatus == false && numTwoStatus == false && operatorStatus == false){
        
        num1 = parseInt(num1.value);
        num2 = parseInt(num2.value);
        
        switch (operator.value){
            case "add" :
                finalResult = num1 + num2 ;
                break;
            case "minus" :
                finalResult = num1 - num2 ;
                break;
            case "multiply" :
                finalResult = num1 * num2 ;
                break;
            case "division" :
                finalResult = num1 / num2 ;
                break;
            case "modulus" :
                finalResult = num1 % num2 ;
                break;
            case "default" :
                Answer.innerHTML = "Operation Error Try again";
                break;
        }
    }
    
    Answer.innerHTML = finalResult;
     
})
function checkValidation(num1,num2,operator) {
    //num1
    if(num1.value == "" || num1.value == null || num1.value == undefined){
        firstError.style.display = "block";
        
        numOneStatus = true;
        
    }else{
        firstError.style.display = "none";
        numOneStatus = false;
        
    }
    //num2
    if(num2.value == "" || num2.value == null || num2.value == undefined){
        secondError.style.display = "block";
        numTwoStatus = true;
    }else{
        secondError.style.display = "none";
        numTwoStatus = false;
    }

//operator
    if(operator.value == "Empty" ){
        operatorError.style.display = "block";
        operatorStatus = true;
        
    }else{
        operatorError.style.display = "none";
        operatorStatus = false;
        
    }
    
}
