# Definição da Classe
class Carro:
    # Metódo Construtor
    # O "self" deve ser o primeiro parametro nos metódos das Classes no Python
    def __init__(self, marca: str, modelo: str, ano: int, velocidade_maxima: int) -> None:
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
        self.velocidade_maxima = velocidade_maxima
        self.velocidade_atual = 0 # Valor Inicial

        # Sintaxe:
        # self.<atributo> = <valor>
        # O que vem depois do self é o nome do atributo


# Criando 1º Carro
carro1 = Carro("Honda", "Civic", 2020, 240)

# Acessando Atributos
print("Carro 1: ")
print(carro1.marca)  # 'Honda'
print(carro1.modelo)  # 'Civic'
print(carro1.ano)  # 2020
print(carro1.velocidade_maxima)  # 240
print(carro1.velocidade_atual)  # 0
print("--------------------")

# Criando 2º Carro
carro1 = Carro("Fiat", "Uno", 2023, 180)

# Acessando Atributos
print("Carro 2: ")
print(carro1.marca)  # 'Fiat'
print(carro1.modelo)  # 'Uno'
print(carro1.ano)  # 2023
print(carro1.velocidade_maxima)  # 180
print(carro1.velocidade_atual)  # 0

