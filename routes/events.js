const { Router } = require('express');
const { check } = require('express-validator');
const { validateJWT } = require('../middlewares/validateJWT');
const { validateFields } = require('../middlewares/validateFields');
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

//Todas las peticiones deben pasar por validar JWT
router.use( validateJWT );

router.get('/', getEvent);

router.post(
    '/',
    [
        check('title','Titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatorio').custom( isDate ),
        check('end','Fecha de finalización es obligatorio').custom( isDate ),
        validateFields
    ], 
    createEvent
);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;