function caseElement(bool, quantityElement, priceElement){
    const case_quantity = document.getElementById(quantityElement);
    const case_price = document.getElementById(priceElement);
 
    caseCalculation(bool, case_quantity, case_price);

}

function caseCalculation( isTrue, quantity, price){
    const stringValue = quantity.value;
    let numberValue = parseInt(stringValue);

    if(isTrue){
        numberValue++;
    }

    else{
        numberValue--;
        if (numberValue < 0){
            return;
        }
    }

    const computation = numberValue * 59;
    quantity.value = numberValue;
    price.innerText = computation;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){

   caseElement(true, 'case-quantity', 'case-price');
   mainCalculation('phone-price', 'case-price');
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
  
    caseElement(false, 'case-quantity', 'case-price');
    mainCalculation('phone-price', 'case-price');
})


