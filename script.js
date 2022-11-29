const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const errorMsg = document.querySelectorAll('.invalid-message');



function validateEmail(email) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(mailFormat) ? true : false;
}


function validateForm() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
            inputs[i].style.background = 'url(images/icon-error.svg) no-repeat 95% 50%'
        }
    }

    if (inputs[0].value === '') {
        errorMsg[0].innerText = 'First Name cannot be empty';
    }
    if (inputs[1].value === '') {
        errorMsg[1].innerText = 'Last Name cannot be empty';
    }
    if (inputs[2].value === '') {
        errorMsg[2].innerText = 'Email cannot be empty';
    } else if (!validateEmail(inputs[2].value)) {
        inputs[2].value = ''
        errorMsg[2].innerText = 'Looks like this is not an email';
        inputs[2].style.border = "2px solid hsl(0, 100%, 74%)";
        inputs[2].style.background = 'url(images/icon-error.svg) no-repeat 95% 50%';
        inputs[2].placeholder = 'email@example/com';
    }
    if (inputs[3].value === '') {
        errorMsg[3].innerText = 'Password cannot be empty';
    } else if (inputs[3].value.length < 8) {
        errorMsg[3].innerText = 'Password must be at least 8 characters';
        inputs[3].style.border = "2px solid hsl(0, 100%, 74%)";
        inputs[3].style.background = 'url(images/icon-error.svg) no-repeat 95% 50%';
    }
}


btn.addEventListener('click', validateForm);

inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.style.background = 'none';
        input.style.border = '1px solid hsl(249, 10%, 26%)';
        input.nextElementSibling.innerText = '';
    })
})