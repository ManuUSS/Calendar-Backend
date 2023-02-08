const { response } = require('express');
const Event = require('../models/Event');

/**
 * Event Routes
 * /api/events 
 */

const getEvent = async ( req, res = response ) => {

    const events = await Event.find().populate('user', 'name');


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

const updateEvent = async ( req, res = response ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {
        
        const event = await Event.findById( eventId );

        if( !event ) 
            return res.status( 404 ).json({ ok: false, msg: 'Evento no existe' });

        if( event.user.toString() !== uid ) 
            return res.status( 401 ).json({ ok: false, msg: 'No tiene privilegio de editar este evento' });

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

        return res.status( 200 ).json({ ok: true, event: updatedEvent });

    } catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({ 
            ok: false,
            msg: 'Hable con Juan'
        }); 
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