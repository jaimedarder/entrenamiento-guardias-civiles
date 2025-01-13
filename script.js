function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value / 100;
    if (peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        document.getElementById("resultado-imc").innerText = "Tu IMC es: " + imc;
    } else {
        document.getElementById("resultado-imc").innerText = "Por favor, completa todos los campos.";
    }
}
