
const MovesModel = require('../models/moveModel')

function getMoves(req, res){

    MovesModel.find({}, (err, moves) => {

        if(err) return res.status(400).send({ message: `Hay un error alv: ${err}` })

        if (!moves )return res.status(404).send({ message: 'No hay moves' })

         console.log(moves)
         res.status(200).send({ moves, mm:'hola' })

    })


}

function createMove(req, res){

    const Move = new MovesModel({

        truck: req.body.truck,
        from: req.body.from,
        to: req.body.to,
        whoCreated: req.body.whoCreated

    })

    Move.save().
    then(result => {

        console.log(result)

    })
    .catch(err => {

        console.log(err);
        

    })

}

module.exports = {

    getMoves,
    createMove

}