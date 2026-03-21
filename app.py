import os

from flask import Flask, send_from_directory

BASE = os.path.dirname(os.path.abspath(__file__))
app = Flask(
    __name__,
    static_folder=os.path.join(BASE, "static"),
    static_url_path="/static",
)


@app.route("/")
def index():
    return send_from_directory(BASE, "index.html")


@app.route("/guide.html")
def guide():
    return send_from_directory(BASE, "guide.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
