require('dotenv').config()

const expres = require('express');
const cors = require('cors')
const { dbConnection } = require('./database/config')

// Crear el servidor expres
const app = expres();

//Configuracion de cors
app.use(cors())

// base de datos
dbConnection();

//console.log(process.env)

// rutas 
app.get('/', (req, res) =>{
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen(process.env.PORT, () =>{
    console.log('Sevidor corriendo en el puerto ' + process.env.PORT);
})