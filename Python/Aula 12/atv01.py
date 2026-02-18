class Pessoa:
    def __init__(self, nome: str, cpf: str, altura: float, peso: float):

        self.nome = nome
        self.cpf = cpf
        self.altura = altura
        self.peso = peso
        
    def calcular_imc(self):
        return self.peso / self.altura ** 2

    def __str__(self):
        return self.nome
    
p = Pessoa("Davi", "123.456.789-00", 1.70, 73)
print(p.calcular_imc())  
    

        
