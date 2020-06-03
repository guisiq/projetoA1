
let botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function (event) {
        event.preventDefault(); 

        let form = document.querySelector("#form-adiciona");
        let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
        }

    console.log(paciente);
    let pacienteTr = montaTr(paciente);
    console.log(pacienteTr);
    let tabela = document.querySelector("#tabela-paciente");
    tabela.appendChild(pacienteTr);

    form.reset()
});
function montaTr(p) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(p.nome, "info-nome")); 
    pacienteTr.appendChild(montaTd(p.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(p.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(p.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(p.imc, "info-imc"));
    return pacienteTr;
}
function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
montaTr();