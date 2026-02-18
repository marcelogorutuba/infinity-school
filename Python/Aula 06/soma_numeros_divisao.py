# Complexidade:
# Tempo: O(n)
# Espaço: O(1)

class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        num1 = num2 = 0
        
        for num in range(1, n + 1):
            if num % m == 0:
                num2 += num
            else:
                num1 += num
            
        return num1 - num2


solution = Solution()
# Caso 1
assert solution.differenceOfSums(10, 3) == 19, 'Caso 1 Falhou!'
print('Caso 1 Passou!')
# num1 = 1 + 2 + 4 + 5 + 7 + 8 + 10 = 37
# num2 = 3 + 6 + 9 = 18
# 37 - 18 = 19

assert solution.differenceOfSums(5, 6) == 15, 'Caso 2 Falhou!'
print('Caso 2 Passou!')
# num1 = 1 + 2 + 3 + 4 + 5 = 15
# num2 = 0
# 15 - 0 = 15