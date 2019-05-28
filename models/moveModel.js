const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const moveModel = Schema({

    truck:{ type:String },
    from: { type: String },
    to:{type:String},
    whoCreated: {type:String},
    dateCreate:{ type:Date, default: Date.now() },
    lastUpdate: { type:Date }

})

module.exports = Mongoose.model('Moves', moveModel);