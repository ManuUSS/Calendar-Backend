const { Router } = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

router.get('/', validateJWT, getEvent);
router.post('/', validateJWT, createEvent);
router.put('/:id', validateJWT, updateEvent);
router.delete('/:id', validateJWT, deleteEvent);

module.exports = router;