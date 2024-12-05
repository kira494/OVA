// comportamiento de la página de entrada
document.addEventListener('DOMContentLoaded', () => {
    const entrada = document.getElementById('entrada');
    const contenidoPrincipal = document.getElementById('contenidoPrincipal');
    const botonComenzar = document.getElementById('botonComenzar');
    // Verificar si venimos de actividades.html
    const fromActivities = document.referrer.includes('actividades.html');
    
    if (fromActivities || sessionStorage.getItem('entradaMostrada')) {
        // Si venimos de actividades o ya se mostró la entrada, ocultamos la entrada
        if (entrada) entrada.style.display = 'none';
        if (contenidoPrincipal) {
            contenidoPrincipal.style.display = 'block';
            contenidoPrincipal.style.opacity = '1';
        }
    } else {
        // Primera visita
        if (entrada && contenidoPrincipal) {
            contenidoPrincipal.style.display = 'block';
            contenidoPrincipal.style.opacity = '0';
            
            botonComenzar.addEventListener('click', () => {
                entrada.style.opacity = '0';
                contenidoPrincipal.style.opacity = '1';
                contenidoPrincipal.style.transition = 'opacity 0.5s ease-in-out';
                
                // Guardar que ya se mostró la entrada
                sessionStorage.setItem('entradaMostrada', 'true');
                
                setTimeout(() => {
                    entrada.style.display = 'none';
                }, 500);
            });
        }
    }
});

// Inicializar el carrusel con autoplay
document.addEventListener('DOMContentLoaded', function() {
    const myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleControlsNoTouching'), {
        interval: 3000, // Cambia las imágenes cada 3 segundos
        wrap: true, // Permite que el carrusel se repita
        touch: false // Deshabilita el control táctil
    });
});


// Actividades 3
document.addEventListener('DOMContentLoaded', () => {
    const botonComenzarActividad3 = document.getElementById('botonComenzarActividad3');
    const contenedorIframe = document.getElementById('contenedorIframe');
    const actividadCards = document.querySelectorAll('.actividadCard');  // Seleccionamos todas las cards

    botonComenzarActividad3.addEventListener('click', () => {
        // Ocultar todas las cards
        actividadCards.forEach(card => {
            card.style.display = 'none';
        });

        // Mostrar el iframe de la actividad 3
        contenedorIframe.style.display = 'block';
    });
});
 // actividad 1
 document.addEventListener('DOMContentLoaded', () => {
    const botonComenzarActividad1 = document.getElementById('botonComenzarActividad1');
    const contenedorIframe1 = document.getElementById('contenedorIframe1');
    const actividadCards = document.querySelectorAll('.actividadCard');  // Seleccionamos todas las cards

    botonComenzarActividad1.addEventListener('click', () => {
        // Ocultar todas las cards
        actividadCards.forEach(card => {
            card.style.display = 'none';
        });

        // Mostrar el iframe de la actividad 1
        contenedorIframe1.style.display = 'block';
    });
});

 // actividad 2
 document.addEventListener('DOMContentLoaded', () => {
    const botonComenzarActividad2 = document.getElementById('botonComenzarActividad2');
    const contenedorIframe2 = document.getElementById('contenedorIframe2');
    const actividadCards = document.querySelectorAll('.actividadCard');  // Seleccionamos todas las cards

    botonComenzarActividad2.addEventListener('click', () => {
        // Ocultar todas las cards
        actividadCards.forEach(card => {
            card.style.display = 'none';
        });

        // Mostrar el iframe de la actividad 1
        contenedorIframe2.style.display = 'block';
    });
});

// Actividades
document.addEventListener('DOMContentLoaded', function () {
    const urls = {
        1: "https://fhrbqctv6zzzos65mcqzrw.on.drv.tw/Actividad%20de%20Normas%20APA%20septima%20edicion/",
        2: "https://es.educaplay.com/juego/9392887-juega_con_normas_apa_7a_ed.html",
        3: "https://es.educaplay.com/juego/21436304-crucigrama_sobre_normas_apa_septima_edicion.html"
    };

    const iframeContainer = document.getElementById('iframeContainer');
    const iframe = document.getElementById('iframeActividad');
    const btnVolver = document.getElementById('btnVolver');

    [1, 2, 3].forEach(num => {
        document.getElementById(`botonComenzarActividad${num}`).addEventListener('click', function (e) {
            e.preventDefault();
            iframe.src = urls[num];
            iframeContainer.classList.remove('d-none');
            document.querySelector('.row').classList.add('d-none');
        });
    });

    btnVolver.addEventListener('click', function () {
        iframeContainer.classList.add('d-none');
        document.querySelector('.row').classList.remove('d-none');
        iframe.src = ""; // Limpiar el iframe
    });
});



// Evaluacion
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el botón con el id 'botoniniciar'
  const botonIniciar = document.getElementById('botoniniciar');
  
  // Asociar el evento de clic al botón
  botonIniciar.addEventListener('click', function() {
    // Ocultar la página de entrada
    document.getElementById("iniciar").style.display = "none";

    // Mostrar el contenedor de la evaluación (asegúrate de que exista el contenedor)
    document.querySelector(".container").style.display = "flex";

    // Llamar a la función para cargar la evaluación
    cargarPregunta();
  });
});

// Función para cargar una pregunta (esto solo es un ejemplo)
function cargarPregunta() {
  console.log("Pregunta cargada");
}

// Obtener las preguntas del script en el HTML
const preguntasData = document.getElementById("preguntas-data").textContent;
const preguntas = JSON.parse(preguntasData);

let btn_correspondiente = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4")
];

let npreguntas = [];
let preguntas_hechas = 0;
let preguntas_correctas = 0;

// Función para escoger una pregunta aleatoria
function escogerPreguntaAleatoria() {
  let n;
  n = Math.floor(Math.random() * preguntas.length);

  while (npreguntas.includes(n)) {
    n = Math.floor(Math.random() * preguntas.length);
  }

  npreguntas.push(n);
  preguntas_hechas++;

  mostrarPregunta(n);
}

// Función para mostrar la pregunta y respuestas
function mostrarPregunta(n) {
  const pregunta = preguntas[n];
  document.getElementById("pregunta").innerText = pregunta.pregunta;

  const posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3
  ].sort(() => Math.random() - 0.5);

  btn_correspondiente.forEach((btn, i) => {
    btn.innerText = posibles_respuestas[i];
    btn.style.background = "white";
    btn.onclick = () => verificarRespuesta(btn, posibles_respuestas[i], pregunta.respuesta);
  });
}

// Función para verificar la respuesta
function verificarRespuesta(boton, respuestaSeleccionada, respuestaCorrecta) {
  if (respuestaSeleccionada === respuestaCorrecta) {
    preguntas_correctas++;
    boton.style.background = "lightgreen";
  } else {
    boton.style.background = "pink";
    btn_correspondiente.forEach((btn) => {
      if (btn.innerText === respuestaCorrecta) {
        btn.style.background = "lightgreen";
      }
    });
  }

  setTimeout(() => {
    if (preguntas_hechas < 15) {
      escogerPreguntaAleatoria();
    } else {
      mostrarModalFinal(); // Llamar al modal al finalizar el juego
    }
  }, 2000);
}

// Función para mostrar el modal con las opciones finales
function mostrarModalFinal() {
  Swal.fire({
    title: `¡Juego terminado!`,
    text: `Puntuación: ${preguntas_correctas}/15\nNota final: ${(preguntas_correctas / 15 * 5).toFixed(2)}`,
    icon: 'success',
    showCancelButton: true,
    confirmButtonText: 'Reintentar',
    cancelButtonText: 'Regresar al inicio',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      // Reiniciar la evaluación (reiniciar el contador y las preguntas)
      preguntas_correctas = 0;
      preguntas_hechas = 0;
      npreguntas = [];
      escogerPreguntaAleatoria();  // Volver a empezar con nuevas preguntas
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Redirigir al inicio (puedes poner el enlace de inicio aquí)
      window.location.href = 'index.html';  // Aquí puedes cambiar 'index.html' por tu página de inicio
    }
  });
}
// Iniciar el juego
escogerPreguntaAleatoria();
