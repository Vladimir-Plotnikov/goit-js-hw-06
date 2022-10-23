const refs = {
loginForm: document.querySelector('.login-form'),
}
// console.log(refs.loginForm);

refs.loginForm.addEventListener('submit',onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("всі поля мають бути заповнені");
    }
    console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
