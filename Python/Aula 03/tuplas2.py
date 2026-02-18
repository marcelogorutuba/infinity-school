produtos = [
	('Teclado', 'Eletrônico', 199.99),
	('Camisa', 'Têxtil', 39.90),
	('Sapato', 'Calçados', 149.50)
]


produtos_filtrados = []



for nome, categoria, produto in produtos:
    if categoria == 'Eletrônico':
          print(nome, categoria, produto in produtos)

          
# Iteração Normal
#for produto in produtos:
#	nome, categoria, preco = produto # Podemos desempacotar dentro do for.
#	print(produto) # Aqui Produto é uma Tupla, que poderiamos desempacotar.
	
# Iteração com Desempacotamento
#for nome, categoria, preco in produtos:
#	print(nome, categoria, preco) # Aqui já temos os dados desempacotados.
