const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app =  express();

app.set('port', process.env.PORT || 3000 );

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static( path.join(__dirname, 'public')))

app.use('/api/preguntas',require('./routes/preguntas.routes'));
app.use('/api/examenes', require('./routes/examenes.routes'));

module.exports = app;