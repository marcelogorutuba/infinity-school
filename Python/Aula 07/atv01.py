def piramide_n(n: int):
    for i in range(1, n + 1):
        print(f'{i}' * i)

n = int(input('Digite um numero: '))
piramide_n(n)