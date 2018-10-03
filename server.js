const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port= process.env.PORT || 3000;


hbs.registerPartials(__dirname + '/views/parciales');
// Express hbs
app.use ( express.static( __dirname+'/public'));

app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home',{
        nombre:"EfrAin hernández",
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () =>{
    console.log(`escuchando peticiones en el puerto ${port}`);
});