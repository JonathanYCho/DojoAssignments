from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
  return render_template("index.html", phrase="this stuff sucks", times=4)
app.run(debug=True)