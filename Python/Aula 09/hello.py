from flask import Flask


app =  Flask(__name__)

@app.route('/')
def hello():
    return {'message':'Hello Word'}


app.run(debug=True)