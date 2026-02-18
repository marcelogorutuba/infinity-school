// Open modal
document.getElementById("openModalBtn").addEventListener("click", function () {
    document.getElementById("addTrackModal").style.display = "flex"; ds
});

// Close modal
document.getElementById("closeModalBtn").addEventListener("click", function () {
    document.getElementById("addTrackModal").style.display = "none";
});

// Close modal when clicking outside of modal content
window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("addTrackModal")) {
        document.getElementById("addTrackModal").style.display = "none";
    }
});

//funções padrão

async function carregarMusicas() {
    //1 passo: Pegar url que queremos consumir
    const url = "https://686937032af1d945cea14619.mockapi.io/api/Musicas"

    //Passo 2: "Trazer" --> fetch()
    const resposta = await fetch(url)

    //Passo 3: "Converter" para objetojs
    const dados = await resposta.json()
    console.log(dados)

    //Passo 4: "incorporar" no HTML
    const tbody = document.querySelector("tbody")
    //tbody.innerHTML += dados[0].nome + "<br>"

    dados.forEach(musica => {
        tbody.innerHTML += `
        <tr>
            <td></td>
            <td class="faixa">
              <img src="${musica.imagem}"
                alt=""
              />
              <div>${musica.nome}</div>
            </td>
            <td>${musica.streams}</td>
            <td>${musica.duracao}</td>
            <td><a href="https://open.spotify.com/intl-pt/track/5wN3KfdxBDDhVcQ5iuFFK7?si=6fa9252afbfd4aa6" class="play-button">▶</a></td>
</tr> `

    })


}

//para adicionar musicas 
async function adcionarMusicas() {
    //aqui é DOM

    const nomeMusica = document.querySelector
    ("#trackName").value

    const duracaoMusica = document.querySelector
    ("#trackDuration").value

    const MusicaStreams = document.querySelector
    ("#trackStreams").value

     const MusicaImage = document.querySelector
    ("#trackImage").value

    let musicaObjeto = {
        "nome":nomeMusica,
        "duracao":duracaoMusica,
        "streams":streamsMusica,
        "image":imageMusica,


    }
    

}
    

    //Passo 1: Pegar a url que quero inserir um novo recurso
    const url = "https://686937032af1d945cea14619.mockapi.io/api/Musicas"
    //Passo 2: Fazer request 
    const resposta = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "aplication/json" },
        body: musicaJSON
    })
    if(resposta.status == 201){
        alert("Musica adicionada")
    }


document.addEventListener("load", carregarMusicas())


