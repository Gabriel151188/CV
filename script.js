// script.js
document.getElementById("info-button").addEventListener("click", function() {
    const extraInfo = document.getElementById("extra-info");
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        this.textContent = "Cerrar Test";
    } else {
        extraInfo.style.display = "none";
        this.textContent = "Mostrar test de Personalidad";
    }
});
