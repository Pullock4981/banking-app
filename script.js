// console.log('Hello, world!');

// js for log in

const logInBtn = document.getElementById('logInBtn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mobileNumber = document.getElementById('mobile-number').value;
        const pinNumber = document.getElementById('pin').value;
        // console.log(mobileNumber, pinNumber);
        if (mobileNumber.length === 11 && pinNumber == '1234') {
            window.location.href = 'deshboard.html';
            // console.log('yeaaaaaaaah');
        }
        else {
            alert('Please enter correct mobile number and pin number');
        }
    });;
     




