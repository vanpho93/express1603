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

app.get('/tinh/:pt/:a/:b', (req, res) => {

});

class PhepTinh {
    constructor(pheptinh, soa, sob){

    }

    getResultString() {
        
    }
}