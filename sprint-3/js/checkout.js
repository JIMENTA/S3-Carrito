var form = document.querySelector(".needs-validation");

form.addEventListener('submit', function(event) {
    const formIsValid = validate()
    console.log('my function result: ', formIsValid)
    if (!formIsValid || form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        form.classList.add('was-validated')
    }

})


//Expresiones
const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
    phone: /^\d{6,14}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    address: /^[A-Za-z0-9\s]{4,40}$/
};

// Exercise 8
function validate() {

    let errores = 0;

    // // Get the input fields
    let inputName = document.querySelector("[name=inputName]");
    let lastName = document.querySelector("[name=inputLastname]");
    let email = document.querySelector("[name=inputEmail]");
    let password = document.querySelector("[name=inputPassword]");
    let address = document.querySelector("[name=inputAddress]");
    let phone = document.querySelector("[name=inputPhone]");

    [inputName, lastName, email, password, address, phone].forEach(field => field.classList.remove("is-invalid"));

    // Validate fields entered by the user: name, phone, password, and email
    if (!RegExp(expresiones.name).test(inputName.value) || inputName.value == "") {
        inputName.classList.add("is-invalid")
        errores++;
    }
    if (!RegExp(expresiones.lastName).test(lastName.value) || lastName.value == "") {
        lastName.classList.add("is-invalid")
        errores++;
    }
    if (!RegExp(expresiones.email).test(email.value) || email.value == "") {
        email.classList.add("is-invalid")
        errores++;
    }
    if (!RegExp(expresiones.password).test(password.value) || password.value == "") {
        password.classList.add("is-invalid")
        errores++;
    }
    if (!RegExp(expresiones.phone).test(phone.value) || phone.value == "") {
        phone.classList.add("is-invalid")
        errores++;
    }
    if (!RegExp(expresiones.address).test(address.value) || address.value == "") {
        address.classList.add("is-invalid")
        errores++;
    }

    return errores === 0
}