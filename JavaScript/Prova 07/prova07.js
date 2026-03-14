let listaNomes = [];

function adicionarNome() {
    let nome = prompt("Digite um nome para adicionar:");
    
    if (nome) {
        listaNomes.push(nome);
        console.log("Nome adicionado com sucesso!");
        console.log("Lista atual:", listaNomes);
    } else {
        console.log("Nome inválido.");
    }
}

function filtrarNomes() {
    let letra = prompt("Digite a letra inicial para filtrar:");
    
    if (letra) {
        let filtrados = listaNomes.filter(nome =>
            nome.toLowerCase().startsWith(letra.toLowerCase())
        );

        console.log("Nomes filtrados:", filtrados);
    } else {
        console.log("Letra inválida.");
    }
}

function buscarNome() {
    let nomeBusca = prompt("Digite o nome que deseja buscar:");

    let encontrado = listaNomes.find(nome => nome === nomeBusca);

    if (encontrado) {
        console.log("Nome encontrado:", encontrado);
    } else {
        console.log("Nome não encontrado.");
    }
}

function transformarNomes() {
    let nomesMaiusculos = listaNomes.map(nome => nome.toUpperCase());
    console.log("Nomes em maiúsculas:", nomesMaiusculos);
}

function verificarNomes() {
    let todosValidos = listaNomes.every(nome => nome.length > 3);
    console.log("Todos os nomes têm mais de 3 caracteres?", todosValidos);
}

function menu() {
    let opcao = "";

    while (opcao !== "0") {
        opcao = prompt(
            "\nMENU\n" +
            "1 - Adicionar nome\n" +
            "2 - Filtrar nomes por letra inicial\n" +
            "3 - Buscar nome específico\n" +
            "4 - Transformar nomes em maiúsculas\n" +
            "5 - Verificar se todos têm mais de 3 caracteres\n" +
            "0 - Sair\n" +
            "Escolha uma opção:"
        );

        switch (opcao) {
            case "1":
                adicionarNome();
                break;
            case "2":
                filtrarNomes();
                break;
            case "3":
                buscarNome();
                break;
            case "4":
                transformarNomes();
                break;
            case "5":
                verificarNomes();
                break;
            case "0":
                console.log("Encerrando o programa...");
                break;
            default:
                console.log("Opção inválida.");
        }
    }
}

menu();
