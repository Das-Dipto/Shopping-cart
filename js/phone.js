function phoneElement(bool, quantityElement, priceElement){
    const phone_quantity = document.getElementById(quantityElement);
    const phone_price = document.getElementById(priceElement);
    
    phoneCalculation(bool, phone_quantity, phone_price);
}

function phoneCalculation( isTrue, quantity, price){
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

    const computation = numberValue * 1219;
    quantity.value = numberValue;
    price.innerText = computation;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
   phoneElement(true, 'phone-quantity', 'phone-price');
   mainCalculation('phone-price', 'case-price');
   
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   phoneElement(false, 'phone-quantity', 'phone-price');
   mainCalculation('phone-price', 'case-price');
   
})

