// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [ 
  { text: "TE AMO MUCHO ISAAA ATT... TU ESPOSITO ", time: 3 },
  { text: "Porque como vos, ninguna, sos unica y inalcanzable", time: 10 },
  { text: "soy muy feliz teniendote en mi vida, nuestra relacion va madurando", time: 19 },
  { text: "y eso es porque amobs le metimos ganas a esto, nunca sientas que no sos", time: 22 },
  { text: "importante para mi, te piso cada dia y cada hora, te amo cada dia mas", time: 29 },
  { text: " gracias por este lindo amor, es lo mas lindo que vivi nena", time: 35 },
   { text: "quiero, deseo y sueño todo con vos, te amo inmensamente mi reina mia", time: 42 },
   { text: "Te amo ATT : Matias Alexis Martinez Montiel", time: 300 },
];


];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
