const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });
});


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
      setTimeout(() => (elemento.innerHTML += letra), 75 * i);
    });
  }
  
  const titulo = document.querySelector("#movimento");
  typeWriter(titulo);

