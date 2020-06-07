# first install dependencies:
# pip install flask
# pip install -U flask-cors


# export FLASK_APP=app.py
# export FLASK_ENV=development
# flask run

from flask import Flask
from flask import g
from flask import request
from flask_cors import CORS
import dbhelpers
import json


# initialize app:
app = Flask(__name__)
CORS(app)

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route('/')
def hello_world():
    return 'Hi there, Ahoy user!'

@app.route('/users', methods=['GET', 'POST'])
def get_user():
    if request.method == 'POST':
        userName = request.json.get('userName')
        password = request.json.get('password')
        record_id = dbhelpers.modify_db(
            'INSERT INTO users(userName, password) VALUES(?, ?)',
            args=(userName, password)
        )
        return record_id
    else:
        records = dbhelpers.query_db(
            'SELECT user_id, userName, password  FROM users'
        )
    return json.dumps(records)

@app.route('/outlines', methods=['GET', 'POST'])
def get_outlines():
    if request.method == 'POST':
        user_id = request.json.get('user_id')
        title = request.json.get('title')
        evidence_1_1 = request.json.get('evidence_1_1')
        evidence_1_2 = request.json.get('evidence_1_2')
        close_call_1 = request.json.get('close_call_1')
        red_herring_1 = request.json.get('red_herring_1')
        evidence_2_1 = request.json.get('evidence_2_1')
        evidence_2_2 = request.json.get('evidence_2_2')
        close_call_2 = request.json.get('close_call_2')
        red_herring_2 = request.json.get('red_herring_2')
        record_id = dbhelpers.modify_db(
            'INSERT INTO outlines(user_id, title, evidence_1_1, evidence_1_2, close_call_1, red_herring_1, evidence_2_1, evidence_2_2, close_call_2, red_herring_2) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            args=(user_id, title, evidence_1_1, evidence_1_2, close_call_1, red_herring_1, evidence_2_1, evidence_2_2, close_call_2, red_herring_2)
        )
        return record_id
    else:
        records = dbhelpers.query_db(
            'SELECT outline_id, user_id, title, evidence_1_1, evidence_1_2, close_call_1, red_herring_1, evidence_2_1, evidence_2_2, close_call_2, red_herring_2  FROM outlines'
        )
    return json.dumps(records)

@app.route('/boards', methods=['GET', 'POST'])
def get_boards():
    if request.method == 'POST':
        outline_id_1 = request.json.get('outline_id_1')
        outline_id_2 = request.json.get('outline_id_2')
        record_id = dbhelpers.modify_db(
            'INSERT INTO boards(outline_id_1, outline_id_2) VALUES(?, ?)',
            args=(outline_id_1, outline_id_2)
        )
        return record_id
    else:
        records = dbhelpers.query_db(
            'SELECT board_id, outline_id_1, outline_id_2  FROM boards'
        )
    return json.dumps(records)
