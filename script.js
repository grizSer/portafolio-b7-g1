let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(500)
  .typeString('Grissel Serrano')
  .pauseFor(1000)
  .deleteAll(100)
  .typeString('Ingeniera en Biotecnología')
  .pauseFor(1000)
  .start();


 