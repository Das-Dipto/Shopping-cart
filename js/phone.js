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
    const phone_quantity = document.getElementById('phone-quantity');
    const phone_price = document.getElementById('phone-price');
    const update = phoneCalculation (true, phone_quantity, phone_price);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phone_quantity = document.getElementById('phone-quantity');
    const phone_price = document.getElementById('phone-price');
    const update = phoneCalculation (false, phone_quantity, phone_price);
})

