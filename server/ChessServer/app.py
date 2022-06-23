from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Basic html file here for Chess!"

if __name__ == "__main__":
    app.run(debug=True)