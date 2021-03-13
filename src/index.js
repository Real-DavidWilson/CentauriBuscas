const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send('');
})

app.listen(3003)