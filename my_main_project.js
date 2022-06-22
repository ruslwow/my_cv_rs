let btn_send_mail = document.getElementById("btn_send")
btn_send_mail.addEventListener("click", sendEmail);


function sendEmail() {
    let params = {
        form_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
        emailjs.send('service_yim6wbw', 'template_lqkeblu', params)
        document.getElementById('form').reset();
        };

// let download_cv = document.getElementById('download').click();



