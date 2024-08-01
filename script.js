document.addEventListener('DOMContentLoaded', function() {
    var welcomeText = document.getElementById('welcome-text');
    var app = document.getElementById('app');

    // Configuración del Typewriter para el primer h1
    var typewriter1 = new Typewriter(welcomeText, {
        loop: true
    });

    typewriter1
        .typeString('Bienvenido a')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Manejamos')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Damos asesorías')
        .pauseFor(1500)
        .start();

    // Configuración del Typewriter para el segundo h1
    var typewriter2 = new Typewriter(app, {
        loop: true
    });

    typewriter2
        .typeString('PixelPoint')
        .pauseFor(1500)
        .deleteAll()
        .typeString('equipos de calidad')
        .pauseFor(1500)
        .deleteAll()
        .typeString('gratuitas en línea')
        .pauseFor(1500)
        .start();
});
