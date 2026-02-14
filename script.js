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

document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.querySelector('[name="nome"]').value;
    const whats = document.querySelector('[name="whats"]').value;
    const mensagem = document.querySelector('[name="mensagem"]').value;
    const honeypot = document.querySelector('[name="empresa"]').value;

    // Anti-spam
    if(honeypot){
        return;
    }

    const numeroDestino = "5551997600239"; // SEU WHATS (com DDI + DDD)

    const texto = `Olá, vim pelo site!\n\n` +
                  `*Nome:* ${nome}\n` +
                  `*WhatsApp:* ${whats}\n` +
                  `*Mensagem:* ${mensagem}`;

    const textoCodificado = encodeURIComponent(texto);

    const url = `https://wa.me/${numeroDestino}?text=${textoCodificado}`;

    window.open(url, "_blank");
});