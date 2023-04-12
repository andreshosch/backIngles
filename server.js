const express = require('express');
const config = require('./src/config/dbConfig');
const cors = require("cors");
const { router } = require("./src/routes/studentsRoute");
const conectarDB = require('./src/config/dbConfig');

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB()
app.use(cors())

app.use(express.json());
app.use('/alumnos', router)

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})