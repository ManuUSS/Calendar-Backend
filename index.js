const express = require('express');
require('dotenv').config();

const app = express();

app.use( express.static( 'public' ) );

// app.get('/', ( req, res ) => {
//     console.log('Se requiere un slash')
//     res.json({ ok: true, message: 'Siuuu' });
// });

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
});