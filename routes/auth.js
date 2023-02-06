/**
 * Rutas de usuarios / Auth
 * host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { createUser, renewUser, loginUser } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validateFields');

router.post(
    '/new', 
    [
        check('name',  'El nombre es obligatorio').not().isEmpty(), 
        check('email',  'El email es obligatorio').isEmail(), 
        check('password','La contraseña debe de ser de 6 caracteres').isLength({ min: 6 }), 
        validateFields
    ],
    createUser );

router.post(
    '/', 
    [
        check('email',  'El email es obligatorio').isEmail(), 
        check('password','La contraseña debe de ser de 6 caracteres').isLength({ min: 6 }),
        validateFields 
    ], 
    loginUser );

router.post('/renew', renewUser );


module.exports = router;