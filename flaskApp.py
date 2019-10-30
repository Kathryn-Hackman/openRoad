from flask import Flask
from flask import jsonify
import requests

app = Flask(__name__)


@app.route("/")
def hello():
	return "Hello, World!"
	
@app.route("/hello")
def hello2():

	return jsonify({'hello':'world'})
	
@app.route("/directions")
def directions():
	origin = request.args.get('start')
	destination = request.args.get('end')
	key = "123123"
	#make the call to google maps
	uri = https://maps.googleapis.com/maps/api/directions/json?
	ret = requests.get(uri+"origin=",origin,"&destination=",destination,"&key=",key)
	return ret