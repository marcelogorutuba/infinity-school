from flask import Flask

pessoas = [ # type: ignore
    {
        'id': '1',
        'nome': 'Davi',
        'idade': 21
    },
    {
        'id': '2',
        'nome': 'Fernanda',
        'idade': 27
    },
    {
        'id': '3',
        'nome': 'Thales',
        'idade': 20
    },
]

app = Flask(__name__)
app.json.sort_keys = False


@app.route('/pessoas')
def listar_pessoas():
    return pessoas


if __name__ == '__main__':
    app.run(debug=True)
