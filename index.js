const express = require('express');
const PhepTinh = require('./PhepTinh');

const app = express();
app.listen(3000, () => console.log('Server start'));

app.get('/show/:id/:name', require('./controller/showController.js'));

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
