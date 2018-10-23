const config = require('../../config').db;
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${config.serverIp}/${config.name}`)
const db = mongoose.connection;

db.on('error', err => console.log('Something went wrong ', err));

db.once('connect', result => {
  console.log('Mongo connected ', result);
});

module.exports = db;
