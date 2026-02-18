# 1. Ler os três números
num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))
num3 = int(input("Digite o terceiro número: "))

# 2. Colocar os números em uma lista
numeros = [num1, num2, num3]

# 3. Ordenar a lista em ordem decrescente
numeros.sort(reverse=True)

# 4. Mostrar os números em ordem decrescente
print("Os números em ordem decrescente são:", numeros)

