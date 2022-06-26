from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return {"members": ["C++", "Java", "Python"]}


# main
if __name__ == "__main__":
    app.run(port=5001, debug=True)
