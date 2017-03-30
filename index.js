const express = require('express');
const bodyParser = require('body-parser');
const parser = bodyParser.urlencoded({ extended: false });
const PhepTinh = require('./PhepTinh');

const app = express();
app.set('view engine', 'ejs');

app.listen(3000, () => console.log('Server start'));

app.get('/show/:id/:name', require('./controller/showController.js'));

app.get('/tinh/:pt/:a/:b', require('./controller/tinhController'));

app.get('/form', (req, res) => {
    const html = `
        <form action="/name"  method="POST">
            <input type="text" name="username" placeholder="Username" />
            <br /><br />
            <input type="password" name="password" placeholder="Password" />
            <br /><br />
            <button>Put</button>
        </form>
    `;
    res.send(html);
});

app.get('/home', (req, res) => res.render('home'));

app.post('/name', parser, (req, res) => {
    console.log(req.body);
    res.send('POST METHOD DETECTED');
});
