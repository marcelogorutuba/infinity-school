// Função para abrir o formulário
function abrirFormulario() {
  document.querySelector("#modalCadastroProduto").style.display = "block";
}

// Função para fechar o formulário
function fecharFormulario() {
  document.querySelector("#modalCadastroProduto").style.display = "none";
}

// Fechar o modal se o usuário clicar fora da caixa de conteúdo
window.onclick = function (evento) {
  if (evento.target == document.querySelector("#modalCadastroProduto")) {
    fecharFormulario();
  }
};


// Aqui faremos a função de carregarProdutos 
async function carregarProdutos(){
    const gradeItems = document.querySelector(".grade-itens")
    // salvar a url 
    const url = "https://686936fd2af1d945cea14602.mockapi.io/api/produtos"
    // trazer as informações da url para meu javascript "fetch()"
    const resposta = await fetch(url)
   
    // separar somente o corpo da requisição
    const dados = await resposta.json()
    console.log(dados)
    gradeItems.innerHTML = "" 
    //
    dados.forEach(produto=>{
        let numero = Number(produto.preco) 
        numero = numero.toFixed(2)
        numero = String(numero).replace(".",",")
        gradeItems.innerHTML += `
        <section class="cartao-item">
            <img src="${produto.Imagem}" alt="Item 1" />
            <h3>${produto.nome}</h3>
            <p class="preco-item">R$ ${ numero}</p>
            <button class="botao-comprar">Comprar</button>
            <button class="botao-deletar" onclick='removerProduto("${produto.id}")'>Deletar</button>
        </section>`
    })
}



async function adicionarProduto() {
  // pegar o valor do primeiro input (nome do produto)
  const nomeProduto = document.querySelector("#nomeProduto").value
  // pegar o valor do segundo  input (preco)
  const precoProduto = document.querySelector("#precoProduto").value
  
  // pegar o valor do tereceiro input (url da imagem)
  const imagemProduto = document.querySelector("#imagemProduto").value
  
  
  // Construir o objeto 
  let objeto = {
    "nome":nomeProduto,
    "preco":precoProduto,
    "Imagem":imagemProduto
    
  }
  
  // aqui em baixo salve a sua url
  const url = "https://686936fd2af1d945cea14602.mockapi.io/api/produtos"
  
  // "traga" as informações da sua url para seu projeto com fetch()
  const resposta = await fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(objeto)
  })  
  fecharFormulario()
  carregarProdutos()
  
}

// Remover produto

async function removerProduto(id) {
	console.log(id)
	const url = `https://686936fd2af1d945cea14602.mockapi.io/api/produtos/${id}`
	const response = await fetch(url,{
		method:"DELETE",

	})

	alert("Produto Deletado com sucesso!")
	carregarProdutos()
	
}