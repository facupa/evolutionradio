    function sendMessage() {
            const message = document.getElementById('message').value;
            const phoneNumber = '5491137973150'; // Cambia esto por el número predefinido en formato internacional
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }