const express = require('express');
const bodyParser = require('body-parser');
const parser = bodyParser.urlencoded({ extended: false });
const PhepTinh = require('./PhepTinh');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './view');
app.use('/static',express.static('public'));

app.listen(3000, () => console.log('Server start'));

app.get('/show/:id/:name', require('./controller/showController.js'));

app.get('/tinh/:pt/:a/:b', require('./controller/tinhController'));

app.get('/form', (req, res) => {
    res.render('form');
});

app.get('/tinh', (req, res) => res.render('tinh'));

app.post('/tinh', parser, (req, res) => {
    const {pt, soa, sob} = req.body;
    const phepTinh = new PhepTinh(pt, soa, sob);
    res.send(phepTinh.getResultString());
});

app.get('/home', (req, res) => res.render('home'));

app.post('/name', parser, (req, res) => {
    console.log(req.body);
    res.send('POST METHOD DETECTED');
});
