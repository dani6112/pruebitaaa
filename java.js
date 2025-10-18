let dif_restantes = 5;
let vidas = 3;
let found = {};

function diferencia_encontrada(event, id) {
  event.preventDefault();

  if (!found[id]) {
    found[id] = true;
    dif_restantes--;
    document.getElementById("dif_restantes").textContent = dif_restantes;

    // Agregar circulo verde en ambas imágenes
    addMark("marks-left", id);
    addMark("marks-right", id);

    if (dif_restantes === 0) {
      document.getElementById("message").textContent = " ¡Ganaste! Encontraste todas las diferencias.";
      disableMap();
    }
  }
}

function click_erroneo(event) {
  event.preventDefault();
  vidas--;
  document.getElementById("vidas").textContent = vidas;

  if (vidas <= 0) {
    document.getElementById("message").textContent = "Perdiste todas tus vidas. ¡Juego terminado!";
    disableMap();
  }
}

function addMark(containerId, id) {
  const coords = {
    1: [20,155,25],
    2: [170,100,25],
    3: [228,60,25],
    4: [175,195,25],
    5: [290,200,25]
  };

  let [x,y,r] = coords[id];
  const mark = document.createElement("div");
  mark.classList.add("mark");
  mark.style.width = mark.style.height = r*2 + "px";
  mark.style.left = x + "px";
  mark.style.top = y + "px";

  document.getElementById(containerId).appendChild(mark);
}

function disableMap() {
  const areas = document.querySelectorAll("area");
  areas.forEach(a => a.removeAttribute("onclick"));
}