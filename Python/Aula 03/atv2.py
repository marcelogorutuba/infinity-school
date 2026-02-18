
frutas_precos = {
    "banana": 5.99,
    "maçã": 8.50,
    "laranja": 4.25
}

print("Dicionário original:", frutas_precos)


fruta_desejada = "maçã"
print(f"O preço da {fruta_desejada} é R${frutas_precos[fruta_desejada]:.2f}")


frutas_precos["abacaxi"] = 7.90
print("\nDicionário após adicionar o abacaxi:", frutas_precos)


frutas_precos["banana"] = 6.50
print("\nDicionário após atualizar o preço da banana:", frutas_precos)
