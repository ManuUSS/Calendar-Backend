const { Router } = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

//Todas las peticiones deben pasar por validar JWT
router.use( validateJWT );

router.get('/', getEvent);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;