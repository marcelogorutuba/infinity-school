class Funcionario:
    def __init__(self, nome, salario_inicial):
        self.nome = nome                    # público
        self.__salario = salario_inicial    # privado
    
    @property
    def salario(self):
        return self.__salario
    
    @salario.setter
    def salario(self, novo_salario):
        if not isinstance(novo_salario, (int, float)):
            raise ValueError("O salário deve ser um número.")
        
        if novo_salario < 0:
            raise ValueError("O salário não pode ser negativo.")
        
        salario_atual = self.__salario
        
        # Não pode diminuir o salário
        if novo_salario < salario_atual:
            print(f"[REJEITADO] Redução de salário não permitida para {self.nome}")
            return
        
        # Aumento máximo de 60%
        limite = salario_atual * 1.60
        if novo_salario > limite:
            print(f"[REJEITADO] Aumento acima de 60% não permitido para {self.nome}")
            print(f"   Máximo permitido: R${limite:.2f}")
            return
        
        self.__salario = novo_salario
        print(f"[OK] Salário de {self.nome} atualizado para R${novo_salario:.2f}")
    
    def calcular_imposto_renda(self):
        return self.__salario * 0.10
    
    def __str__(self):
        return f"{self.__class__.__name__}: {self.nome} | Salário: R${self.salario:.2f}"


# ============ SUBCLASSE GERENTE ============
class Gerente(Funcionario):
    def __init__(self, nome, salario_inicial, setor):
        super().__init__(nome, salario_inicial)
        self.setor = setor
    
    # Sobrescrevendo o __str__ para mostrar o setor
    def __str__(self):
        return f"Gerente: {self.nome} | Setor: {self.setor} | Salário: R${self.salario:.2f}"


# ============ SUBCLASSE ESTAGIARIO ============
class Estagiario(Funcionario):
    def __init__(self, nome, salario_inicial, supervisor):
        super().__init__(nome, salario_inicial)
        self.supervisor = supervisor
    
    # Estagiários geralmente têm regras diferentes de aumento (opcional na atividade)
    # Mas como não foi pedido sobrescrever, herdam normalmente as regras da classe pai
    
    def __str__(self):
        return f"Estagiário: {self.nome} | Supervisor: {self.supervisor} | Bolsa: R${self.salario:.2f}"


# =============== TESTE DAS CLASSES ===============
if __name__ == "__main__":
    print("=== TESTANDO AS CLASSES ===")
    
    gerente = Gerente("Ana Costa", 12000.00, "Tecnologia")
    estagiario = Estagiario("Pedro Lima", 1500.00, "Ana Costa")
    
    print(gerente)
    print(estagiario)
    print()
    
    print(f"Imposto de Renda da {gerente.nome}: R${gerente.calcular_imposto_renda():.2f}")
    print(f"Imposto de Renda do {estagiario.nome}: R${estagiario.calcular_imposto_renda():.2f}")
    print("-" * 60)
    
    # Testando aumento de salário (herdado)
    print("Tentando aumentar salário da gerente em 50% (de 12k para 18k):")
    gerente.salario = 18000.00   # 50% de aumento → permitido (máx 60%)
    
    print("\nTentando aumentar salário do estagiário em 70% (de 1.5k para 2.55k):")
    estagiario.salario = 2550.00  # 70% → acima de 60% → será rejeitado
    
    print("\nSituação final:")
    print(gerente)
    print(estagiario)