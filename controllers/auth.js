const { response } = require('express');

const createUser = ( req, res = response ) => {

    const { name, email, password } = req.body;

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