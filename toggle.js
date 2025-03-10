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