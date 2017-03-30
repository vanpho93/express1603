const express = require('express');
const PhepTinh = require('./PhepTinh');

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
    const { pt, a, b } = req.params;
    const pheptinh = new PhepTinh(pt, a, b);
    try{
        res.send(pheptinh.getResultString());
    } catch (e) {
        res.send(e + '');
    }
});
