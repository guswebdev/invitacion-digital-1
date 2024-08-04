const d = document;

const $alias = d.querySelector(`[data-alias]`);
const $btnPlay = d.querySelector(`[data-play]`);
const $btnPause = d.querySelector(`[data-pause]`);
const $mensajeCopiado = d.querySelector(`[data-copiado]`);

const $audio = d.querySelector(`audio`);
let tiempo = 0;

const $days = d.querySelector(`[data-days]`);
const $hours = d.querySelector(`[data-hours]`);
const $min = d.querySelector(`[data-minutes]`);
const $seconds = d.querySelector(`[data-seconds]`);

const fecha = "5 aug 2024";
//console.log(Date())

function countTimer() {
  const fechaEvento = new Date(fecha);
  const fechaActual = new Date();

  const totalSeconds = (fechaEvento - fechaActual) / 1000;

  const daysCalc = Math.floor(totalSeconds / 3600 / 24);
  const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
  const minsCalc = Math.floor(totalSeconds / 60) % 60;
  const secondsCalc = Math.floor(totalSeconds % 60);

  $days.innerHTML = daysCalc;
  $hours.innerHTML = hoursCalc;
  $min.innerHTML = minsCalc;
  $seconds.innerHTML = secondsCalc;
}

setInterval(countTimer, 1000);

d.addEventListener("click", (e) => {
  //console.log(e.target)
  if (e.target === $alias) {
    let texto = $alias.dataset.alias;
    console.log(texto);
    navigator.clipboard.writeText(texto);
    $mensajeCopiado.classList.remove(`d-none`);
    setTimeout(() => {
      $mensajeCopiado.classList.add(`d-none`);
    }, 2000);
  }

  if (e.target === $btnPlay) {
    $audio.setAttribute("src", "assets/audio/La Original - Emilia, TINI.mp3");

    $audio.currentTime = tiempo;
    $audio.play();
    $btnPlay.parentElement.classList.add(`d-none`);
    $btnPause.parentElement.classList.remove(`d-none`);
    console.log(`Reproduciendo: ${$audio.src}`);
  }
  if (e.target === $btnPause) {
    console.log("ALGO ALGO");
    tiempo = $audio.currentTime;

    $btnPause.parentElement.classList.add(`d-none`);
    $btnPlay.parentElement.classList.remove(`d-none`);
    $audio.pause();
  }
});
