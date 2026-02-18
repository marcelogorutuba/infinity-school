class Carro:
    def __init__(
        self, marca: str, modelo: str, ano: int, velocidade_maxima: int
    ) -> None:
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
        self.velocidade_maxima = velocidade_maxima
        self.velocidade_atual = 0

    # Metódo Acelerar
    def acelerar(self, velocidade: int) -> int:
        if self.velocidade_atual + velocidade > self.velocidade_maxima:
            # Levantar uma exeption garante que a velocidade maxima
            # nunca será ultrapassada.
            raise ValueError(
                f"Não é possivel acelerar para exceder a velocidade máxima de {self.velocidade_maxima}Km/h."
            )

        self.velocidade_atual += velocidade
        return self.velocidade_atual

    # Metódo Frear
    def frear(self, velocidade: int) -> int:
        if self.velocidade_atual - velocidade < 0:
            # Levantar uma exeption garante que a velocidade atual
            # nunca será menor que 0.
            raise ValueError(
                "Não é possivel frear para uma velocidade menor que 0Km/h."
            )

        self.velocidade_atual -= velocidade
        return self.velocidade_atual


# Criando 1º Carro
carro1 = Carro("Honda", "Civic", 2020, 240)

# Acessando Atributos
print(f"Carro: {carro1.modelo}")
print(f"Velocidade Atual: {carro1.velocidade_atual}")
# 'Velocidade Atual: 0'

# Chamando o metódo acelerar (Correto)
carro1.acelerar(200)
print(f"Velocidade Atual: {carro1.velocidade_atual}")
# 'Velocidade Atual: 200'

# Chamando o metódo acelerar (Exception)
carro1.acelerar(50)
print(f"Velocidade Atual: {carro1.velocidade_atual}")
# ValueError: Não é possivel acelerar para exceder a velocidade máxima de 240Km/h.

# Chamando o metódo frear (Correto)
carro1.frear(50)
print(f"Velocidade Atual: {carro1.velocidade_atual}")
# 'Velocidade Atual: 150'

# Chamando o metódo frear (Exception)
carro1.frear(160)
print(f"Velocidade Atual: {carro1.velocidade_atual}")
# ValueError: Não é possivel frear para uma velocidade menor que 0Km/h.