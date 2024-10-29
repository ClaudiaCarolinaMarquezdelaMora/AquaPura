// scripts.js
document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para pruebas

    // Mostrar notificación
    const notification = document.getElementById('notification');
    notification.classList.add('show');

    // Ocultar notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);

    // Reiniciar el formulario
    this.reset();
});
