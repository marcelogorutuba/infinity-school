from operacoes import  somar, subtrair, multiplicar, dividir


print("Calculadora:")
print("[1] - Somar")
print("[2] - Subtrair")
print("[3] - Multiplicar")
print("[4] - Dividir")

opcao = input("Escolha a operação: ")

num1 = int(input("Digite o 1º numero: "))
num2 = int(input("Digite o 2º numero: "))

if opcao == "1":
    resultado = somar(num1, num2)
    print(f"{num1} + {num2} = {resultado}")
elif opcao == "2":
    resultado = subtrair(num1, num2)
    print(f"{num1} - {num2} = {resultado}")
elif opcao == "3":
    resultado = multiplicar (num1, num2)
    print(f"{num1} * {num2} = {resultado}")
elif opcao == "4":
    try:
        resultado = dividir(num1, num2)
        print(f"{num1} / {num2} = {resultado}")
    except ZeroDivisionError:
        print("Não é possivel dividir um numero por 0.")
else:
    print("Opção inválida")

