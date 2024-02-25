const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const userInfo = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    };

    if (!userInfo.email.trim() || !userInfo.password.trim()) {
        return alert('All form fields must be filled in');
    } 
    
    console.log(userInfo);
    event.currentTarget.reset();
}

