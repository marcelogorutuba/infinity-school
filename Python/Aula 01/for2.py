soma = 0

for n in range(3):
    nota = float(input("Digite uma nota: "))
    soma += nota

media = soma / 3
print(f'A media das notas é {media:.3}')

