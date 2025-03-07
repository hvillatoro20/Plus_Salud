// Funcionalidad del chat
const chatButton = document.getElementById('chat-button');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');
const sendChat = document.getElementById('send-chat');

chatButton.addEventListener('click', () => {
    chatBox.style.display = 'block';
});

closeChat.addEventListener('click', () => {
    chatBox.style.display = 'none';
});

sendChat.addEventListener('click', () => {
    const name = document.getElementById('chat-name').value;
    const phone = document.getElementById('chat-phone').value;
    const email = document.getElementById('chat-email').value;
    const message = document.getElementById('chat-message').value;

    if (name && phone && email && message) {
        alert('Mensaje enviado. Gracias por contactarnos.');
        chatBox.style.display = 'none';
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Funcionalidad del formulario de contacto
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Consulta enviada. Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
});