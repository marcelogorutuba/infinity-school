# Exemplo de lista telefônica
telefones = {
    "Ana": "9999-1234",
    "João": "8888-4321",
    "Maria": "9777-5678"
}

print(telefones["Ana"])
print(telefones.get("Claudio"))

telefones["Ana"] = '0000-0000'
telefones["Ana"] = '1111-1111'
print(telefones)

for chave in telefones:
    print(chave, telefones [chave])


for chave, valor in telefones.items:
    print(chave,  valor)