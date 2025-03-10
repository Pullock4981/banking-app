// console.log('hiiii')

// cash out

document.getElementById("cashOutBtn")
    .addEventListener('click', function (event) {
        event.preventDefault();
        // console.log("clicked")
        const amountOfCashOut = document.getElementById("cashOutAmount").value 
        // console.log(amountOfCashOut)
        const convertedAmountOfCashOut = parseFloat(amountOfCashOut);
        const pin = document.getElementById("pin").value 
        const convertedPin = parseInt(pin)
        const mainBalance = document.getElementById("main-balance").innerText
        const convertedMainBalance = parseFloat(mainBalance);
        if (convertedPin === 1234 && mainBalance > 0) {
            const remainingMoney = convertedMainBalance - convertedAmountOfCashOut;
            alert("Cash out successfully!!!")
            document.getElementById("main-balance").innerText = remainingMoney;
            document.getElementById("cashOutAmount").value = '';
        }
        else if (mainBalance == 0) {
            alert("Enter money on your account.")
        }
        else {
            alert("Enter the right pin.")
        }
    })