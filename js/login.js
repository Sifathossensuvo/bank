document.getElementById('btn-login')
.addEventListener('click', function(event){
   event.preventDefault();
const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
console.log(phoneNumber, pinNumber);

if(phoneNumber === '0172' && pinNumber === '1234'){

   window.location.href = "/home.html";
}

else{
    alert("wrong phone number and pinNumber.")
}

})
