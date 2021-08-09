const router = require('express').Router();
const fs = require('fs')
const path = require('path')
const { notes } = require('../../db/db.json');

// Get the notes from the db
router.get('/notes', (req, res) => {
    res.json(notes)
})

// Post a new note to the db
router.post('/notes', (req, res) => {
    // Set an id to the note 
    req.body.id = notes.length.toString();
    const note = req.body

    if(!note) {
        res.status(400).send('The note is not properly formatted.')
    }
    // Push the note to the array of notes in db
    notes.push(note)

    // Write the new note into the db
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify({ notes }, null, 2))
    res.json(note)
})

module.exports = router;