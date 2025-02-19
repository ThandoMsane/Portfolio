function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    if (!params.email) {
        alert("The recipient's email address is empty. Please enter a valid email address.");
        return;
    }

    const serviceID = "service_8xy8ful";
    const templateID = "template_dbgahyo";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert("Your message was successfully sent.");
        })
        .catch(err => console.log(err));
}
