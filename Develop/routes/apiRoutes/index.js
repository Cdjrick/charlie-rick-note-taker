const router = require('express').Router();
const fs = require('fs')
const path = require('path')
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes)
})

router.post('/notes', (req, res) => {
    const note = req.body
    if(!note) {
        res.status(400).send('The note is not properly formatted.')
    }
    notes.push(note)

    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify({ notes }, null, 2))
    res.json(note)
})

module.exports = router;