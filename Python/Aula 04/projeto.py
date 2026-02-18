def listar_despesas(despesas):
    if not despesas:
        print("Nenhuma despesa cadastrada.")
    else:
        for despesa in despesas:
            print(f"\n- {despesa['titulo']}")
            print(f"Valor: R${despesa['valor']:.2f}")
            print(f"Descrição: {despesa['descricao']}")

def cadastrar_despesa(despesas):
    titulo = input("Digite o título da despesa: ")
    try:
        valor = float(input("Digite o valor da despesa: R$"))
        if valor < 0:
            print("O valor não pode ser negativo.")
            return
    except ValueError:
        print("Valor inválido. Digite um número.")
        return
    descricao = input("Digite a descrição da despesa: ")
    despesa = {"titulo": titulo, "valor": valor, "descricao": descricao}
    despesas.append(despesa)
    print("Despesa cadastrada com sucesso!")

def editar_despesa(despesas):
    if not despesas:
        print("Nenhuma despesa para editar.")
        return
    listar_despesas(despesas)
    try:
        indice = int(input("Digite o número da despesa a editar (1 a {}): ".format(len(despesas)))) - 1
        if 0 <= indice < len(despesas):
            titulo = input("Digite o novo título (ou pressione Enter para manter '{}'): ".format(despesas[indice]['titulo']))
            if titulo:
                despesas[indice]['titulo'] = titulo
            valor = input("Digite o novo valor (ou pressione Enter para manter R${:.2f}): ".format(despesas[indice]['valor']))
            if valor:
                try:
                    valor = float(valor)
                    if valor < 0:
                        print("O valor não pode ser negativo.")
                        return
                    despesas[indice]['valor'] = valor
                except ValueError:
                    print("Valor inválido. Digite um número.")
                    return
            descricao = input("Digite a nova descrição (ou pressione Enter para manter '{}'): ".format(despesas[indice]['descricao']))
            if descricao:
                despesas[indice]['descricao'] = descricao
            print("Despesa editada com sucesso!")
        else:
            print("Índice inválido.")
    except ValueError:
        print("Digite um número válido.")

def excluir_despesa(despesas):
    if not despesas:
        print("Nenhuma despesa para excluir.")
        return
    listar_despesas(despesas)
    try:
        indice = int(input("Digite o número da despesa a excluir (1 a {}): ".format(len(despesas)))) - 1
        if 0 <= indice < len(despesas):
            despesas.pop(indice)
            print("Despesa excluída com sucesso!")
        else:
            print("Índice inválido.")
    except ValueError:
        print("Digite um número válido.")

def menu():
    despesas = []
    while True:
        print("   Gerenciador de Despesas")
        print("[1] - Listar Despesas")
        print("[2] - Cadastrar Despesa")
        print("[3] - Editar Despesa")
        print("[4] - Excluir Despesa")
        print("[5] - Sair")
        opcao = input("Opção: ")
        
        if opcao == "1":
            listar_despesas(despesas)
        elif opcao == "2":
            cadastrar_despesa(despesas)
        elif opcao == "3":
            editar_despesa(despesas)
        elif opcao == "4":
            excluir_despesa(despesas)
        elif opcao == "5":
            print("Saindo do programa...")
            break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    menu()

