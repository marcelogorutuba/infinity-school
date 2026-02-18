class Carro:
    # Metódo Construtor
    def __init__(
        self, 
        marca: str, 
        modelo: str, 
        ano: int, 
        velocidade_maxima: float
    ):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano

        self.velocidade_atual = 0.0
        self.velocidade_maxima = velocidade_maxima
    
    def __str__(self) -> str:
        return f'{self.marca} {self.modelo}'


carro1 = Carro('Honda', 'Civic', 2023, 300)
carro2 = Carro('Fiat', 'Uno', 2004, 180)

print(carro1)
print(carro2)

# marca = input('Digite a marca do carro: ')
# modelo = input('Digite o modelo do carro: ')
# ano = int(input('Digite o ano do carro: '))
# velocidade_maxima = float(input('Digite a velocidade máxima do carro: '))

# carro = Carro(marca, modelo, ano, velocidade_maxima)
# print(carro)