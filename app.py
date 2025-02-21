from flask import Flask, render_template
from config import config_options


app = Flask(__name__)
app.config.from_object(config_options["development"])


@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=app.config["DEBUG"])