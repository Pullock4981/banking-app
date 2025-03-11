// js for toggle

// add money
document.getElementById("addMoneyBox")
    .addEventListener('click', function () {
        document.getElementById("addMoneySection").classList.remove("hidden");
        document.getElementById("history").classList.add("hidden")
        document.getElementById("cashOutSection").classList.add("hidden");
        document.getElementById("transferMoneySection").classList.add("hidden");
        document.getElementById("getBonusSection").classList.add("hidden");
        document.getElementById("payBillSection").classList.add("hidden");
        document.getElementById("transactionSection").classList.add("hidden");
        if ("addMoneySection") {
            // console.log('hi')
            // document.getElementById("addMoneyBox").style.backgroundColor = "#dff7df"
        }
        else {
            // document.getElementById("addMoneyBox").style.backgroundColor = "white"
        }
    })

// cash out

document.getElementById("cashOutBox")
    .addEventListener('click', function () {
        document.getElementById("cashOutSection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden");
        document.getElementById("addMoneySection").classList.add("hidden");
        document.getElementById("transferMoneySection").classList.add("hidden");
        document.getElementById("getBonusSection").classList.add("hidden");
        document.getElementById("payBillSection").classList.add("hidden");
        document.getElementById("transactionSection").classList.add("hidden");
        if ("cashOutSection") {
            // console.log('hi')
            // document.getElementById("cashOutBox").style.backgroundColor = "#dff7df"
        }
        else {
            // document.getElementById("cashOutBox").style.backgroundColor = "white"
        }
    })

// transferMoneyBox

document.getElementById("transferMoneyBox")
    .addEventListener('click', function () {
        document.getElementById("transferMoneySection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden")
        document.getElementById("addMoneySection").classList.add("hidden");
        document.getElementById("cashOutSection").classList.add("hidden");
        document.getElementById("getBonusSection").classList.add("hidden");
        document.getElementById("payBillSection").classList.add("hidden");
        document.getElementById("transactionSection").classList.add("hidden");
        if ("transferMoneySection") {
            // console.log('hi')
            // document.getElementById("transferMoneyBox").style.backgroundColor = "#dff7df"
        }
        else {
            // document.getElementById("transferMoneyBox").style.backgroundColor = "white"
        }
    })

// getBonusBox

document.getElementById("getBonusBox")
    .addEventListener('click', function () {
        document.getElementById("getBonusSection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden")
        document.getElementById("addMoneySection").classList.add("hidden");
        document.getElementById("cashOutSection").classList.add("hidden");
        document.getElementById("transferMoneySection").classList.add("hidden");
        document.getElementById("payBillSection").classList.add("hidden");
        document.getElementById("transactionSection").classList.add("hidden");
        if ("getBonusSection") {
            // console.log('hi')
            // document.getElementById("getBonusBox").style.backgroundColor = "#dff7df"
        }
        else {
            // document.getElementById("getBonusBox").style.backgroundColor = "white"
        }
    })

// payBillBox

document.getElementById("payBillBox")
    .addEventListener('click', function () {
        document.getElementById("payBillSection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden")
        document.getElementById("addMoneySection").classList.add("hidden");
        document.getElementById("cashOutSection").classList.add("hidden");
        document.getElementById("transferMoneySection").classList.add("hidden");
        document.getElementById("getBonusSection").classList.add("hidden");
        document.getElementById("transactionSection").classList.add("hidden");
        if ("payBillSection") {
            // console.log('hi')
            // document.getElementById("payBillBox").style.backgroundColor = "#dff7df"
        }
        else {
            // document.getElementById("payBillBox").style.backgroundColor = "white"
        }
    })

// transactionBox

document.getElementById("transactionBox")
    .addEventListener('click', function () {
        document.getElementById("transactionSection").classList.remove('hidden');
        document.getElementById("history").classList.add("hidden")
        document.getElementById("addMoneySection").classList.add("hidden");
        document.getElementById("cashOutSection").classList.add("hidden");
        document.getElementById("transferMoneySection").classList.add("hidden");
        document.getElementById("getBonusSection").classList.add("hidden");
        document.getElementById("payBillSection").classList.add("hidden");
        if ("transactionSection") {
            // console.log('hi')
            // document.getElementById("transactionBox").style.backgroundColor = "#dff7df"
        }
        else {
            // document.getElementById("transactionBox").style.backgroundColor = "white"
        }
    })