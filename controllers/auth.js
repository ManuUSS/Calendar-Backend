const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = ( req, res = response ) => {

    const { name, email, password } = req.body;

    // return res.status( 400 ).json({ok: false, msg: 'El nombre debe ser mayor a 5 letras'});
    const errors = validationResult( req );
    if( !errors.isEmpty() ) return res.status( 400 ).json({ ok: false, errors: errors.mapped() });


    return res.status( 201 ).json({
        ok: true,
        msg: 'registro',
        name, 
        email,
        password
    })
}

const loginUser = ( req, res = response ) => {
    const { email, password } = req.body;

    const errors = validationResult( req );
    if( !errors.isEmpty() ) return res.status( 400 ).json({ ok: false, errors: errors.mapped() });

    res.status( 200 ).json({
        ok: true,
        email,
        password
    })
}

const renewUser = ( req, res = response ) => {
    res.json({
        ok: true
    })
}

module.exports = {
    createUser,
    loginUser,
    renewUser
}