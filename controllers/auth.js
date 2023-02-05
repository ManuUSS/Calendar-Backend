const { response } = require('express');


const createUser = ( req, res = response ) => {
    res.json({
        ok: true
    })
}

const loginUser = ( req, res ) => {
    res.json({
        ok: true
    })
}

const renewUser = ( req, res ) => {
    res.json({
        ok: true
    })
}

module.exports = {
    createUser,
    loginUser,
    renewUser
}