// console.log('hiii')

// // active
const showActive = document.querySelectorAll('.add-color');
showActive.forEach((active) => {
    active.addEventListener('click', function () {
        showActive.forEach((active) => {
            active.classList.remove('active')
        })
        active.classList.add('active')
    })
})