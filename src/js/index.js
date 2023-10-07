
const botones = document.querySelectorAll(".boton");

const personajes = document.querySelectorAll(".personaje")

botones.forEach((boton, indice) => {
    boton.addEventListener("click", () => {

        const botonSeleccionado = document.querySelector(".boton.seleccionado")
        botonSeleccionado.classList.remove("seleccionado");

        boton.classList.add("seleccionado");

        const personajeSeleccionado = document.querySelector(".personaje.seleccionado");
        personajeSeleccionado.classList.remove("seleccionado")

        personajes[indice].classList.add("seleccionado")
    });
});

