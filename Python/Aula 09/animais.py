from flask import Flask 
from http import HTTPStatus

animais = []
app = Flask(__name__) 

@app.route('/animais')
def listar_animais():
	if len(animais) == 0:
		return ('', HTTPStatus.NO_CONTENT)

	return (animais, HTTPStatus.OK)
	
if __name__ == '__main__':
    app.run(debug=True)