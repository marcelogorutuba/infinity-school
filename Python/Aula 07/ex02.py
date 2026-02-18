


def contar_vogais(texto):
    vogais = 'aeiouAEIOU'
    contador = 0
    for letra in texto:
        if letra in vogais:
            contador += 1
    return contador


texto = input("Digite um texto: ")
print(contar_vogais(texto))