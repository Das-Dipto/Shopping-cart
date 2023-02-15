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
    const case_quantity = document.getElementById('case-quantity');
    const case_price = document.getElementById('case-price');
    const update = caseCalculation (true, case_quantity, case_price);
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const case_quantity = document.getElementById('case-quantity');
    const case_price = document.getElementById('case-price');
    const update = caseCalculation (false, case_quantity, case_price);
})

