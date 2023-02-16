
function mainCalculation(phone_price, case_price){
    const phonePrice = document.getElementById(phone_price);
    const casePrice = document.getElementById(case_price);

    let subTotal = parseInt(phonePrice.innerText) + parseInt(casePrice.innerText);
    document.getElementById('sub-total').innerText = subTotal;

    let tax = parseInt(subTotal * 0.10);
    document.getElementById('tax').innerText = tax;

    let total = subTotal - tax;
    document.getElementById('total').innerText = total;

}