const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('styles'));
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.listen(3000,()=>{
    console.log("Servidor Corriendo en el Puerto 3000");
});

app.get('/Tablero',(req, res)=>{
    res.render('TableroPrincipal.html');
})