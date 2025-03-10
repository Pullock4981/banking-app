// console.log('add')

// js for add money with main balance

document.getElementById("addToMoney")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById("addedAmount").value 
        // console.log(typeof amount)
        const convertedAmount = parseFloat(amount)
        // console.log(typeof convertedAmount)
        const pin = document.getElementById("pin").value 
        const convertedPin = parseInt(pin)
        // console.log(typeof convertedPin)
        const mainBalance = document.getElementById("main-balance").innerText
        const convertedMainBalance = parseFloat(mainBalance)
        // console.log(typeof convertedMainBalance)

        if (convertedPin === 1234) {
            // console.log("ok add koro")
            const sum = convertedMainBalance + convertedAmount;
            // console.log(sum)
            document.getElementById("main-balance").innerText = sum;
        }
        else {
            alert("thik thak pin daw")
        }

    })