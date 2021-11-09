// Creando el servidor
import express from 'express'; //Modulo
import router from './routes/index.js';
import db from './config/db.js';




const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('BASE DE DATOS OK'))
    .catch(error => console.log(error))

// Definir puerto 
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Crear mi middleware(Obtener año actual)
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    next();
});

// Agregar bodyParser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Agregar router al app
app.use('/', router);

// Definir la carpeta publica para que tome los estilos
app.use(express.static('public'));
app.use(express.static('controllers'));

// Puerto que escucha el servidor
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});