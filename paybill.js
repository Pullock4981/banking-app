// console.log('hiiii')
//
// // transfer money
//
document.getElementById("payBillBtn")
    .addEventListener('click', function (event) { 
        event.preventDefault();
        const amountOfpay = document.getElementById("payAmount").value 
        const convertedAmountOfPay = parseFloat(amountOfpay);
        const pin = document.getElementById("pin").value 
        const convertedPin = parseInt(pin)
        const mainBalance = document.getElementById("main-balance").innerText
        const convertedMainBalance = parseFloat(mainBalance);
        if (convertedPin === 1234 && mainBalance > 0) {
            const remainingMoney = convertedMainBalance - convertedAmountOfPay;
            alert("Transfer successfully!!!")
            document.getElementById("main-balance").innerText = remainingMoney;
            document.getElementById("payAmount").value = '';
        }
        else if (mainBalance == 0) {
            alert("Enter money on your account.")
        }
        else {
            alert("Enter the right pin.")
        }
    })
        