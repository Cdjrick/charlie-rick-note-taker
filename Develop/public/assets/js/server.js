const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = 3001

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', 'notes.html'))
})

app.get('/api/notes', (req, res) => {
    fs.readFile('../../../db/db.json', (err, data) => {
        if (err) {
            console.log(`The error is ${err}`)
        }
        res.send(data)
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})