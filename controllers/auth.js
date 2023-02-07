const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createUser = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        let user = await User.findOne({ email })
        if( user ) 
            return res.status( 400 ).json({ ok: false, msg: 'Un usuario existe con ese correo' });
        
        user = new User( req.body )
        
        const salt = bcrypt.genSaltSync();

        user.password = bcrypt.hashSync( password, salt );

        await user.save();
    
        return res.status( 201 ).json({
            ok: true,
            uid: user.id,
            name: user.name
        })

    } catch ( error ) {
        console.log( error );

        res.status( 500 ).json({
            ok: false,
            msg: 'Hable con el admin'
        });

    }
}

const loginUser = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email });

        if( !user ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }

        const validPassword = bcrypt.compareSync( password, user.password );

        if( !validPassword ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        res.status( 200 ).json({
            ok: true,
            uid: user.id,
            name: user.name
        })


    } catch (error) {
        console.log( error );
        
        res.status( 500 ).json({
            ok: false,
            msg: 'Hable con el admin'
        });

    }

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