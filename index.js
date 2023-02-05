const express = require('express');

const app = express();

app.get('/', ( req, res ) => {
    console.log('Se requiere un slash')
    res.json({ ok: true, message: 'Siuuu' });
});

app.listen( 4000, () => {
    console.log('Servidor corriendo en puerto 4000')
});