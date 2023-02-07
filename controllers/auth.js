const { response } = require('express');
const User = require('../models/User');

const createUser = async ( req, res = response ) => {

    const { name, email, password } = req.body;

    try {
        
        const user = new User(  )
    
        await user.save();
    
        return res.status( 201 ).json({
            ok: true,
            msg: 'registro'
        })

    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

const loginUser = ( req, res = response ) => {

    const { email, password } = req.body;

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