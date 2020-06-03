let paciente = document.querySelectorAll('.pasiente');
console.log(paciente);
let tdPeso;
let tdAltura;
let tdIMC;
let imc;
let tdImc;
function calculaImc( peso ,altura ) {

    let imc = peso / altura**2;
    console.log(imc)
    return imc.toFixed(2);

}
for( let i = 0; i < paciente.length; i++){

    tdPeso = paciente[i].querySelector('.info-peso').textContent;
    console.log(tdPeso);

    tdAltura = paciente[i].querySelector('.info-altura').textContent;
    console.log(tdAltura);

    tdImc = paciente[i].querySelector(".info-imc");
    let pesoValido = true; // assumindo que o peso é válido (de boa fé)
    let alturaValida = true; // assumindo que a altura é válida (de boa fé)


    if(tdPeso <= 0 || tdPeso >= 500) {
    pesoValido = false;
    tdImc.textContent = "Peso Inválido!"
    paciente[i].classList.add("paciente-invalido");
    }
    if(tdAltura <= 0 || tdAltura >= 3.00) {
    alturaValida = false;
    tdImc.textContent = "altura Inválido!"
    paciente[i].classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        tdImc.textContent = calculaImc(tdPeso,tdAltura);
    }
}
