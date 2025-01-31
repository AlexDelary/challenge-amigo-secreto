//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problelema proposto.
//Desafio
// Array para armazenar os nomes dos amigos
let amigos = []; // Array para armazenar os amigos

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome."); // Alerta se o campo estiver vazio
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a exibição da lista
    input.value = ""; // Limpa o campo de entrada
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = `${amigo}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceSorteado];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `O amigo secreto sorteado é: ${amigoSecreto}!`;
}
