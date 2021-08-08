const express = require('express')
const path = require('path')
const fs = require('fs')
const { notes } = require('./db/db.json');

const app = express();
const PORT = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// let noteTitle = document.querySelector('.note-title')
// let noteText = document.querySelector('.note-textarea')

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'notes.html'))
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.post('/api/notes', (req, res) => {
    const note = req.body
    if(!note) {
        res.status(400).send('The note is not properly formatted.')
    }
    notes.push(note)

    fs.writeFileSync('db/db.json', JSON.stringify({ notes }, null, 2))
    res.json(note)
})

app.get('*', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
})