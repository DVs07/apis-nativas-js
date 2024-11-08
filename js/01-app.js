const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(
        resultado => {console.log('El resultado es: ', resultado);
    })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Notificacion desde JS.', {
            icon: 'img/DVs07.png',
            body: 'Esto es una notificacion'
        });

        notificacion.onclick = () => {
            window.open('viaje.html');
        }
    }
})