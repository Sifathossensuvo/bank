// add money to the acount


document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
const addMoneyInput = document.getElementById('add-money-input').value;
console.log(addMoneyInput);

const pinNumber = document.getElementById('input-pin').value
console.log(pinNumber)

if(pinNumber === '1214'){
    console.log("Adding money to your acount")

    const balance = document.getElementById('balance').innerText;
    console.log(balance)

    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;

    document.getElementById('balance').innerText = newBalance;
}
else{
    alert('wrong pin number. please provide your correct  pin number')
}

})