/**
 * Rutas de usuarios / Auth
 * host + /api/auth
 */
const { Router } = require('express');
const router = Router();
const { createUser, renewUser, loginUser } = require('../controllers/auth');

router.post('/new', createUser );

router.post('/', loginUser );

router.post('/renew', renewUser );


module.exports = router;