const { response } = require('express');
const Event = require('../models/Event');

/**
 * Event Routes
 * /api/events 
 */

const getEvent = async ( req, res = response ) => {

    const events = Event.find().populate('user', 'name');


    return {
        ok: true,
        events
    }
}

const createEvent = async ( req, res = response ) => {

    
    const event = new Event( req.body );

    try {
        
        event.user = req.uid;

        const eventOnDb = await event.save();

        

    } catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({ 
            ok: false,
            msg: 'Hable con Juan'
        })
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