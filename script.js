const onda = document.querySelector(".onda-sonora");
const barras = document.querySelectorAll(".onda-sonora div");

onda.addEventListener("click", () => {
  barras.forEach((barra) => {
    const estado = barra.style.animationPlayState;
    barra.style.animationPlayState = estado === "paused" ? "running" : "paused";
  });
});
