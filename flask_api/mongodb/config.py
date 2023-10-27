from flask import Flask
from flask_pymongo import PyMongo
from mongodb.mongoflask import MongoJSONEncoder, ObjectIdConverter
import urllib 
import boto3

app = Flask(__name__)


app.json_encoder = MongoJSONEncoder
app.url_map.converters['objectid'] = ObjectIdConverter
# app.config["MONGO_URI"] = "mongodb://root:" + urllib.parse.quote("SmartWork@123") + "@159.89.238.247:27017/fireinspection?authSource=admin"
# app.config["MONGO_URI"] = "mongodb://boomfire:SmartWork@54.87.246.44:27017/fireinspection"
# app.config["MONGO_URI"] = "mongodb://root:1Qprtp6*pwr!@54.87.246.4D4:27017/map?authSource=admin"
app.config["MONGO_URI"] = "mongodb://admin:mapAdmin%40123@localhost:27017/map?authSource=admin"
# app.config["MONGO_URI"] = "mongodb://localhost:27017/map"

mongo = PyMongo(app)


# access_key = 'AKIAI2AGV7YEKALGT3XA'
# secret_key = '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'

access_key = 'AKIAW3NS44LFMELDOAMM'
secret_key = '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'
# Create an S3 client
s3_client = boto3.client('s3', aws_access_key_id=access_key, aws_secret_access_key=secret_key)


from api.src import pdf_controller
from api.src import variation_controller