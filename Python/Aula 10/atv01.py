class Livro:
    def __init__(
        self, 
        titulo: str, 
        editora: str, 
        ano: Optional[int] = None, 
        autor: Optional[str] = None
    ):
        self.titulo = titulo
        self.editora = editora
        self.ano = ano
        self.autor = autor


livro1 = Livro(
    titulo='Harry Potter e a Pedra Filosofal', 
    editora='Rocco', 
    ano=2000, 
    autor='J.K Rowlling'
)
print(f'Titulo: {livro1.titulo}')

livro2 = Livro("Biblía", "Deus")
print(livro2.titulo)  # "Biblía"
print(livro2.ano)  # None