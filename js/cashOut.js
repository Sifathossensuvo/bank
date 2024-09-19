document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
event.preventDefault()


const cashOut = document.getElementById('cash-out-input').value;
const cashOutNumber = parseFloat(cashOut)
const pinNumber = document.getElementById('cash-out-pin').value;

if(pinNumber === '1234'){
const balance = document.getElementById('balance').innerText
const balanceNumber = parseFloat(balance)

const newBalance = balanceNumber - cashOutNumber;

document.getElementById('balance').innerText = newBalance;
}
else{
    alert("failed to cash out. please try again")
}

})