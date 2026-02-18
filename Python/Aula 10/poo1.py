class Carro:
    def __init__(self, marca: str, modelo: str, ano: int, velocidade_maxima: float):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano

        self.velocidade = 0.0
        self.velocidade_maxima = velocidade_maxima


# Acessando Atributos
carro = Carro('Honda', 'Civic', 2023, 300)
print(f'Carro: {carro.marca} {carro.modelo}')
print(f'Velocidade: {carro.velocidade}')

carro_velho = Carro('Chevrolet', 'Impala', 2000, 280)
print(f'Carro: {carro_velho.marca} {carro_velho.modelo}')
print(f'Velocidade: {carro_velho.velocidade}')