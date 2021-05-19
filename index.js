const express = require('express');
const path = require('path');


const app = express();

const myLogger = require('./middleware/myLogger')

app.use(myLogger)


const PORT = process.env.PORT || 5000 ;
app.listen(PORT , console.log(`Server Started on port ${PORT}`));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Home.html'))
})
.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Home.html'))
})

.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Contact.html'))
})

.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Service.html'))
})