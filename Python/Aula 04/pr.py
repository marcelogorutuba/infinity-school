
despesas = []

while True:
        print("=============================")
        print("Gerenciador de Despesas")
        print("=============================")
        print("[1] - Listar Despesas")
        print("[2] - Cadastrar Despesa")
        print("[3] - Editar Despesa")
        print("[4] - Excluir Despesa")
        print("[5] - Sair")
        print("=============================")
        opcao = input("Opção: ")
        
        if opcao == "1":
           print('Lista de despesas')
        elif opcao == "2":
            print('Cadastrar pessoas')
        elif opcao == "3":
            print('Editar   Depesas')
        elif opcao == "4":
            print('Apagar despesas')
        elif opcao == "5":
            print("Saindo do programa...")
            break
        else:
            print("Opção inválida. Tente novamente.")

