from flask import Flask

pessoas = [
    {
        'id': '1',
        'name': 'Junior',
        'idade': 21
    },
    {
        'id': '2',
        'name': 'Rafaela',
        'idade': 22
    },
    {
        'id': '3',
        'name': 'Marcelo',
        'idade': 23
    },

]
app = Flask(__name__)
app.json.sort_keys = False


@app.route('/pessoas')
def listar_pessoas():
    return pessoas


if __name__ == '__main__':
    app.run(debug=True)