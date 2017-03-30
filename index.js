const express = require('express');
const PhepTinh = require('./PhepTinh');

const app = express();
app.listen(3000, () => console.log('Server start'));

app.get('/show/:id/:name', require('./controller/showController.js'));

app.get('/tinh/:pt/:a/:b', require('./controller/tinhController'));

app.get('/form', (req, res) => {
    const html = `
        <form action="/name"  method="POST">
            <input type="text" name="username" />
            <button>Put</button>
        </form>
    `;
    res.send(html);
});

app.post('/name', (req, res) => {
    res.send('POST METHOD DETECTED');
});