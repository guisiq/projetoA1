var botaoLogar = document.querySelector("#botao-logar");
botaoLogar.addEventListener("click",validar());
 function validar() {
    console.log("fui clicado");
    var usuario = document.querySelector('#usuario');
    var senha = document.querySelector('#senha');
    if (usuario.value == "admin" && senha.value == "admin") {
        window.location.href = "aula13\index.html";
        console.log("entrou");
    } else{
        alert("Usuário ou senha errada!");
    }
}