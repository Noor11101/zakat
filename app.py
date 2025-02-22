from flask import Flask , render_template , request
from calculate import cal

app = Flask(__name__)


@app.route('/')
def index():
     return render_template('index.html')



@app.route('/process' , methods=['POST'])
def process():
    
    weight = request.form['weight']
    karat = request.form['karat']
    price_gold = request.form['price_gold']
    
    if weight and karat and price_gold:
        
        value = cal(weight, karat, price_gold)
        return render_template('result.html', result=value)
    
    
    else:
        return "Please provide all required input fields."
    
if __name__ == '__main__':
    app.run(debug=False , port=7000  , host='0.0.0.0')