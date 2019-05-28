const mongoose = require('mongoose')
const app = require('./app');

const db = 'mongodb://localhost:27017/cr';

mongoose.connect(db, (err, res) => {

    if ( err ) throw err

    console.log('DataBase Established')

    app.listen( 3000, function(){

        console.log("Server on Port: " + 3000)

    })
})

