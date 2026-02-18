def calcular_imc(peso, altura):

  imc = peso / (altura ** 2)
  return imc


peso = float(input('Digite o seu peso: '))  
altura = float(input('Digite a sua altura: '))  

resultado_imc = calcular_imc(peso, altura)
print(f"O IMC é: {resultado_imc:.2f}") 
