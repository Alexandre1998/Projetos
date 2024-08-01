function calcularIMC() {
    const alturaCm = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(alturaCm) || isNaN(peso) || alturaCm <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    const alturaM = alturaCm / 100;  // Converter altura de cm para m
    const imc = peso / (alturaM * alturaM);
    const imcArredondado = imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Seu IMC é:</strong> ${imcArredondado}</p>
        <p><strong>Cálculo:</strong> ${peso} kg / (${alturaM.toFixed(2)} m * ${alturaM.toFixed(2)} m)</p>
        <p><strong>Classificação:</strong> ${classificacao}</p>
    `;
}
