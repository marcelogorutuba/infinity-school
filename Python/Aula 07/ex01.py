


numero = int(input("Digite um número: "))

def positivo_ou_negativo(numero):
    if numero >= 0:
        return 'P'
    else:
        return 'N'
print(positivo_ou_negativo(numero))