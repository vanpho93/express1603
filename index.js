const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server start'));

//http://localhost:3000/show/100

app.get('/show/:id/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.send('Hello world: ' + id + ' : ' + name);
});

//http://localhost:3000/tinh/cong/10/5

//10 + 5 = 15
//eval
app.get('/tinh/:pt/:a/:b', (req, res) => {

});

class PhepTinh {
    constructor(pheptinh, soa, sob){
        this.pheptinh = pheptinh;
        this.soa = soa;
        this.sob = sob;
    }

    getResultString() {
        const sign = this.getSign();
        const left = `${this.soa} ${sign} ${this.sob}`;
        const result = eval(left);
        return `${left} = ${result}`;
    }

    getSign() {
        switch(this.pheptinh){
            case 'cong': 
                return '+';
            case 'tru':
                return '-';
            case 'nhan':
                return '*'
            default: return '/'
        }
    }
}

const pt1 = new PhepTinh('chia', 4, 5);
console.log(pt1.getResultString());
