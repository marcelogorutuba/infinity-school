def imprimir_padrao(n):

  if not isinstance(n, int) or n <= 0:
    return

  for linha in range(1, n + 1):


    elementos_da_linha = []
    for numero in range(1, linha + 1):
      elementos_da_linha.append(str(numero))

 
    print('\t'.join(elementos_da_linha))

try:
  n_informado = int(input("Digite um numero ai LUDIMILO: "))

  imprimir_padrao(n_informado)

except ValueError:
  print("Entrada inválida. Por favor, digite um número inteiro.")