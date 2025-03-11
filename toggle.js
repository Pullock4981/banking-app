// js for toggle

// add money
document.getElementById("addMoneyBox")
    .addEventListener('click', function () {
        document.getElementById("addMoneySection").classList.remove("hidden");
        document.getElementById("history").classList.add("hidden")
        if ("addMoneySection") {
            // console.log('hi')
            document.getElementById("addMoneyBox").style.backgroundColor = "#dff7df"
        }
    })

// cash out

document.getElementById("cashOutBox")
    .addEventListener('click', function () {
        document.getElementById("cashOutSection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden")
        if ("cashOutSection") {
            // console.log('hi')
            document.getElementById("cashOutBox").style.backgroundColor = "#dff7df"
        }
    })

// transferMoneyBox

document.getElementById("transferMoneyBox")
    .addEventListener('click', function () {
        document.getElementById("transferMoneySection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden")
        if ("transferMoneySection") {
            // console.log('hi')
            document.getElementById("transferMoneyBox").style.backgroundColor = "#dff7df"
        }
    })

// getBonusBox

document.getElementById("getBonusBox")
    .addEventListener('click', function () {
        document.getElementById("getBonusSection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden")
        if ("getBonusSection") {
            // console.log('hi')
            document.getElementById("getBonusBox").style.backgroundColor = "#dff7df"
        }
    })

// payBillBox

document.getElementById("payBillBox")
    .addEventListener('click', function () {
        document.getElementById("payBillSection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden")
        if ("payBillSection") {
            // console.log('hi')
            document.getElementById("payBillBox").style.backgroundColor = "#dff7df"
        }
    })

// transactionBox

document.getElementById("transactionBox")
    .addEventListener('click', function () {
        document.getElementById("transactionSection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden")
        if ("transactionSection") {
            // console.log('hi')
            document.getElementById("transactionBox").style.backgroundColor = "#dff7df"
        }
    })