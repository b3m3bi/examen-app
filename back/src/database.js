const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/examen-app', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then( () => console.log('db connected')).catch( err => console.err(err) );