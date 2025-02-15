// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Una obsesión que no tiene sentido", time: 6 },
  { text: "La explicación a mis noches sin dormir", time: 10 },
  { text: "Cómo te adueñaste de mis latidos", time: 14 },
  { text: "Es tan complejo y tan fácil de sentir", time: 17 },
  { text: "No pensé que te iba a encontrar", time: 20 },
  { text: "Ese domingo en aquel bar", time: 24 },
  { text: "Ahora me muero por gritar", time: 27 },
  { text: "Que desde que te vi", time: 31 },
  { text: "Quiero que, aunque pase mi vida, recuerden", time: 32 },
  { text: "Que sin condiciones, siempre te seguí", time: 36 },
  { text: "Sé que unas se ganan y que otras se pierden", time: 39 },
  { text: "Pero no me importa si te tengo a ti", time: 43 },
  { text: "Qué pasa si brindamos otra vez", time: 46 },
  { text: "Porque después de tanto, te encontré", time: 49 },
  { text: "Sé que unas se ganan y que otras se pierden", time: 53 },
  { text: "Pero no me importa si la vida es corta", time: 56 },
  { text: "Yo te tengo a ti", time: 59 },
  { text: "Pero no me importa si la vida es corta", time: 103 },
  { text: "Yo te tengo a ti", time: 106 },
  { text: "Pero no me importa si la vida es corta", time: 109 },
  { text: "Yo te tengo a ti", time: 113 },
  { text: "Desde que te di mi vida", time: 114 },
  { text: "Te miro y casi reviento", time: 116 },
  { text: "Cargo una llama encendida", time: 118 },
  { text: "Y es como un presentimiento", time: 120 },
  { text: "De que, como tú, no hay nadie", time: 121 },
  { text: "Por eso hice el juramento", time: 123 },
  { text: "De que, aunque me falte el aire", time: 125 },
  { text: "Siempre hay un aliento junto a ti", time: 127 },
  { text: "No pensé que te iba a encontrar", time: 130 },
  { text: "Ese domingo en aquel bar", time: 132 },
  { text: "Ahora me muero por gritar", time: 136 },
  { text: "Que desde que te vi", time: 140 },
  { text: "Quiero que, aunque pase mi vida, recuerden", time: 142 },
  { text: "Que sin condiciones, siempre te seguí", time: 145 },
  { text: "Sé que unas se ganan y que otras se pierden", time: 149 },
  { text: "Pero no me importa si te tengo a ti", time: 152 },
  { text: "Qué pasa si brindamos otra vez", time: 156 },
  { text: "Porque después de tanto, te encontré", time: 159 },
  { text: "Sé que unas se ganan y que otras se pierden", time: 202 },
  { text: "Pero no me importa si la vida es corta", time: 205 },
  { text: "Yo te tengo a ti", time: 208 },
  { text: "Pero no me importa si la vida es corta", time: 212 },
  { text: "Yo te tengo a ti", time: 215 },
  { text: "Pero no me importa si la vida es corta", time: 219 },
  { text: "Yo te tengo a ti", time: 221 },
  { text: "TE AMO MUCHO ISAAA ATT... ALEX", time: 224 },

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
