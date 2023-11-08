from flask import Flask, request, make_response
from flask_cors import CORS, cross_origin

USERNAME = "admin"
PASSWORD = "admin"

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/login/', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    data = request.get_json()
    if (data['username'] == USERNAME and data['password'] == PASSWORD):
        return make_response("Login Success", 200)
    else:
        return make_response("Login Failed", 401)


if __name__ == '__main__':
    app.run(host="0.0.0.0")

