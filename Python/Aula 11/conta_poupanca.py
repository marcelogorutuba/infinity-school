from conta1 import Conta


class ContaPoupanca(Conta):
    def __init__(
        self, 
        titular: str, 
        numero: str, 
        saldo: float = 0.0,
        taxa_juros: float = 0.01
    ):
        super().__init__(titular, numero, saldo)
        self.taxa_juros = taxa_juros

    def aplicar_juros(self):
        self._saldo += self._saldo * self.taxa_juros

    def __str__(self):
        return f'Conta Poupança de {self.titular} - R${self.saldo:.2f}'


# conta_default = Conta('Lucca', '233', 100)
conta_pp = ContaPoupanca('Thales', '1234', 1000)

# print(conta_default.taxa_juros)
print(conta_pp)

conta_pp.aplicar_juros()

print(conta_pp)

conta_pp.aplicar_juros()

print(conta_pp)
