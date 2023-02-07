const { response } = require('express');

/**
 * Event Routes
 * /api/events 
 */

const getEvent = ( req, res = response ) => {
    return {
        ok: true,
        msg: 'getEvent'
    }
}

const createEvent = ( req, res = response ) => {

    

    return {
        ok: true,
        msg: 'createEvent'
    }
}

const updateEvent = ( req, res = response ) => {
    return {
        ok: true,
        msg: 'updateEvent'
    }
}

const deleteEvent = () => {
    return {
        ok: true,
        msg: 'deleteEvent'
    }
}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}