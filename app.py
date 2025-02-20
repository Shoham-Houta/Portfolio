from flask import Flask
from config import config_options


app = Flask(__name__)
app.config.from_object(config_options["development"])


@app.route("/")
def home():
    return ""

if __name__ == "__main__":
    app.run(debug=app.config["DEBUG"])