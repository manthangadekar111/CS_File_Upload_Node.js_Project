const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/csvDatabase');
const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
