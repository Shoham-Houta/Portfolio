from flask import Flask, render_template, request
from config import config_options


app = Flask(__name__)
app.config.from_object(config_options["development"])


@app.context_processor
def inject_request():
    return dict(request=request)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/About")
def about():
    pass


if __name__ == "__main__":
    app.run(debug=app.config["DEBUG"])
