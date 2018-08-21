const mongoose = require('mongoose');
const schema = mongoose.Schema;

var chapita = new schema({
    brand: String,
    country: String,
    type: String,
    year: Number,
    image: String,
    website: String
});

module.exports = mongoose.model('Chapita', chapita);
