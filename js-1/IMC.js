function bmi (peso, altura) {
    altura = altura / 100;
    var imc = peso / (altura * altura);
    return imc;
}

console.log(bmi(95, 171))