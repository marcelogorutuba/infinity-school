#Fruta = int(input('Digite banana: '))

#qtd_vogais = 0
#texto = input('Digite um texto qualquer: ')

#for letra in texto:
###print(f'A palavra tem {qtd_vogais} vogais no total.')
#

qtd_vogais = 0
texto = input('Digite o seu nome e vamos descobrir quantas vogais ele tem: ')
for letra in texto:
    if letra == 'a' or letra == 'e' or letra == 'i' or letra == 'o' or letra == 'u':
        qtd_vogais += 1
print(f'Quantidades de vogais: {qtd_vogais}')