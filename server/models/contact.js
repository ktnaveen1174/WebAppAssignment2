/* File name: contact.js
 * Student name: Naveen Kanmani Thirunavukkarasu
 * Student ID: 301247248
 * Date: Oct 17, 2022 */ 

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);