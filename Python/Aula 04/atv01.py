numeros = []


while True:
    
    num = input("Digite um número (ou 'fim' para terminar): ")
    
    
    if num.lower() == 'fim':
        break
    
    try:
        numeros.append(float(num))
    except ValueError:
        print("Por favor, digite um número válido.")

print("\nNúmeros inseridos:", numeros)

if len(numeros) > 0:
    soma = sum(numeros)
    media = soma / len(numeros)
    
    print(f"Soma dos números: {soma}")
    print(f"Média dos números: {media}")
else:
    print("Nenhum número foi inserido.")
