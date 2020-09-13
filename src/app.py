import csv
import os

from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_cors import CORS


# Configuration
DEBUG = True

# Instantiate the app
app = Flask(__name__, template_folder="../templates", static_folder='../templates/static')
app.config.from_object(__name__)

# Use bootstrap
Bootstrap(app)

# Enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


def get_recipes() -> list:
	"""
	Get a list of the available recipes.
	:return: the list of recipe files
	"""
	return os.listdir("recipes")


@app.route('/')
def index():
	return render_template("index.html")


if __name__ == '__main__':
	app.run(debug=DEBUG)
