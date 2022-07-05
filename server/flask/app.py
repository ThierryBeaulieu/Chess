from flask import Flask, send_from_directory
from flask_cors import CORS
from flask import send_from_directory, abort

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return {"members": ["C++", "Java", "Python"]}


app.config['UPLOAD_FOLDER'] = "./lib/"


@app.route('/get-fbx/<string:filename>')
def piece(filename):
    try:
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)
    except FileNotFoundError:
        abort(404)
    return "hello"

    # main
if __name__ == "__main__":
    app.run(port=5001, debug=True)
