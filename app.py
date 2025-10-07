from flask import Flask, jsonify, render_template, request
from test_execution_buttons import function1, function2

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hobbies')
def hobbies():
    return render_template('hobbies.html')

@app.route('/test_execute_function')
def test_execute_function():
    return render_template('test_execute_function.html')

@app.route('/execute_function', methods=['POST'])
def execute_function():
    function_name = request.form['function_name']
    if function_name == 'function1':
        output = function1()
    elif function_name == 'function2':
        output = function2()
    else:
        output = "Function not found"
    return jsonify({'output': output})

if __name__ == '__main__':
    app.run(debug=True)

