document.addEventListener("DOMContentLoaded", function () {
    let amigos = [];

    // Obtendo elementos do HTML
    const inputNome = document.getElementById("nomeInput");
    const botaoAdicionar = document.getElementById("adicionarBtn");
    const botaoSortear = document.getElementById("sortearBtn");
    const listaNomes = document.getElementById("listaNomes");
    const resultado = document.getElementById("resultado");

    function adicionarNome() {
        const nome = inputNome.value.trim();

        if (nome === "") {
            alert("Por favor, digite um nome válido.");
            return;
        }

        if (amigos.includes(nome)) {
            alert("Esse nome já foi adicionado.");
            return;
        }

        amigos.push(nome);
        atualizarLista();
        inputNome.value = ""; // Limpa o campo
    }

    function atualizarLista() {
        listaNomes.innerHTML = ""; // Limpa antes de atualizar

        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });
    }

    function sortearNome() {
        if (amigos.length < 2) {
            alert("Adicione pelo menos 2 nomes para o sorteio.");
            return;
        }

        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.textContent = `O nome sorteado é: ${sorteado}!`;
    }

    botaoAdicionar.addEventListener("click", adicionarNome);
    botaoSortear.addEventListener("click", sortearNome);
});
