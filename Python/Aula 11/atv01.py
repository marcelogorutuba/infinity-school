class Funcionario:
    def __init__(self, nome, salario_inicial):
        self.nome = nome                    # atributo público
        self.__salario = salario_inicial    # atributo privado
    
    # Property para ler o salário
    @property
    def salario(self):
        return self.__salario
    
    # Setter para modificar o salário com as regras pedidas
    @salario.setter
    def salario(self, novo_salario):
        if not isinstance(novo_salario, (int, float)):
            raise ValueError("O salário deve ser um número.")
        
        if novo_salario < 0:
            raise ValueError("O salário não pode ser negativo.")
        
        salario_atual = self.__salario
        
        # Regra 1: o salário não pode ser menor que o valor anterior
        if novo_salario < salario_atual:
            print(f"Aviso: Tentativa de redução de salário rejeitada.")
            print(f"   Salário atual: R${salario_atual:.2f} | Tentativa: R${novo_salario:.2f}")
            return  # não altera o salário
        
        # Regra 2: o aumento não pode ser maior que 60% do valor anterior
        limite_aumento = salario_atual * 1.60  # 60% de aumento = multiplicar por 1.6
        if novo_salario > limite_aumento:
            print(f"Aviso: Aumento acima de 60% não permitido!")
            print(f"   Máximo permitido: R${limite_aumento:.2f}")
            print(f"   Valor solicitado: R${novo_salario:.2f}")
            return  # não altera o salário
        
        # Se passou nas validações, atualiza o salário
        self.__salario = novo_salario
        print(f"Salário atualizado com sucesso para R${novo_salario:.2f}")
    
    # Método para calcular o imposto de renda (10% do salário)
    def calcular_imposto_renda(self):
        return self.__salario * 0.10


# =============== TESTE DA CLASSE ===============
if __name__ == "__main__":
    func = Funcionario("João Silva", 3000.00)
    
    print(f"Nome: {func.nome}")
    print(f"Salário atual: R${func.salario:.2f}")
    print(f"Imposto de Renda: R${func.calcular_imposto_renda():.2f}")
    print("="*50)
    
    # Testes do setter
    func.salario = 4000.00   # aumento de ~33% → permitido
    print(f"Novo salário: R${func.salario:.2f}")
    
    func.salario = 6000.00   # aumento para o limite de 60% → permitido
    print(f"Novo salário: R${func.salario:.2f}")
    
    func.salario = 9601.00   # tentaria aumentar mais de 60% → rejeitado
    
    func.salario = 5000.00   # tentativa de redução → rejeitado
    
    print(f"Salário final: R${func.salario:.2f}")
    print(f"Imposto de Renda final: R${func.calcular_imposto_renda():.2f}")