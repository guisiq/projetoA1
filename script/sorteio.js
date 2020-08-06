let especie;
let ocupacao;
let atributo;
let asesorio;

function getArrayRandomElement(arr) {
    if (arr && arr.length) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    // The undefined will be returned if the empty array was passed
}
let divisao = getArrayRandomElement([0, 1]);

function mudarclass(a) {
    divisao = a;
    sortearPersonagem();
}

function sortearPersonagem() {

    divisao = getArrayRandomElement([0, 1]);
    if (divisao === 0) {
        // comico 
        console.log('comico')
        console.log('')

        especie = getArrayRandomElement(personagem.comico.especie);
        console.log(especie);

        ocupacao = getArrayRandomElement(personagem.comico.ocupacao);
        console.log(ocupacao);

        atributo = getArrayRandomElement(personagem.comico.atributo);
        console.log(atributo);

        asesorio = getArrayRandomElement(personagem.comico.asesorio);
        console.log(asesorio);

    } else if (divisao === 1) {
        // fantasia   
        console.log('fantasia')
        console.log('')

        especie = getArrayRandomElement(personagem.fantasia.especie);
        console.log(especie);

        ocupacao = getArrayRandomElement(personagem.fantasia.ocupacao);
        console.log(ocupacao);

        atributo = getArrayRandomElement(personagem.fantasia.atributo);
        console.log(atributo);

        asesorio = getArrayRandomElement(personagem.fantasia.asesorio);
        console.log(asesorio);

    } else if (divisao === 2) {
        // medieval 
        console.log('medieval')
        console.log('')

    } else if (divisao === 3) {
        // naturesa   
        console.log('naturesa')
        console.log('')

    }
    document.querySelector('.sugestao').textContent = ` ${especie} ${ocupacao} ,${atributo} ,${asesorio}`
}
sortearPersonagem();