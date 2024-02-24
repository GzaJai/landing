const btn = document.getElementById('button');
const sentSpan = document.getElementById('sent-message');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();


btn.value = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_iv58glr';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Enviar Email';
    sentSpan.classList.remove("sent-message")
    sentSpan.classList.add("sent-message-ok")
    sentSpan.innerHTML = 'Tu Email se envió correctamente.'
    }, (err) => {
    btn.value = 'Enviar Email';
    console.log(JSON.stringify(err));
    sentSpan.classList.remove("sent-message")
    sentSpan.classList.add("sent-message-ok")
    sentSpan.innerHTML = 'Intentelo más tarde.'
    });
});
