const { app } = require('./config');
const db = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

//Ruta de las url
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contacto', (req, res) => {
    const message = req.query.message || null;
    res.render('contact', { message: null });
});

app.get('/tendencias', (req, res) => {
    res.render('tendencias');
});

app.get('/tienda', (req, res) => {
    res.render('tienda');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

//Rutas administativas


//Ruta para insertar formulario contactos
app.post('/submitContacto', (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;

    db.query('INSERT INTO clientes (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)', [nombre, email, telefono, mensaje], (err, result) => {
        if(err) {
            console.log(err);
            res.send('Error al insertar usuario');
        }else {
            console.log(result);
            res.render('contact', {message: 'Nos pondremos en contacto contigo en la brevedad.'});
            //res.send('Usuario insertado con exito!');
        }
    });
});

//Ruta para insertar formulario de Post
app.post('/submitPost', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    db.query('INSERT INTO clientes (nombre, email, mensaje) VALUES (?, ?, ?)', [nombre, email, mensaje], (err, result) => {
        if(err) {
            console.log(err);
            res.send('Error al insertar post');
        }else {
            console.log(result);
            res.redirect('/blog-single?message=Gracias por comentar este post entra a verificación.');
            //res.send('Usuario insertado con exito!');
        }
    });
});

module.exports = app;