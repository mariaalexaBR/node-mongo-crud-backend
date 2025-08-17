const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Configuración de handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Conexión MongoDB
const dbUri = 'mongodb://admin:secret@mongo:27017/mi-app-db'; // Cambia 'mi-app-db' por el nombre de tu base de datos

mongoose.connect(dbUri)
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log(err));

// Ruta ejemplo
app.get('/', (req, res) => {
    res.send('Hola desde mi app con MongoDB y Docker!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
