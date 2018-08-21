const Chapita = require('../models/chapita');

exports.home = (req, res) => {
    res.json({
        message: "Server it´s ok"
    });
};

exports.save = (req, res) => {
    var chapa = new Chapita({
        brand: req.body.brand,
        country: req.body.country,
        type: req.body.type,
        year: req.body.year,
        image: req.body.image,
        website: req.body.website
    });

    chapa.save((error, doc) => {
        if (error) {
            res.status(500).json({
                message: error
            })
        } else {
           /*  res.status(200).json({
                response
            }); */
            Chapita.find((err, response) => {
                if (err) {
                    res.status(500).json({
                        message: err
                    })
                } else {
                    res.status(200).json({
                        response
                    });
                }
            })
        }
    });
}


exports.find = (req, res) => {
    Chapita.find((err, response) => {
        if (err) {
            res.status(500).json({
                message: err
            })
        } else {
            res.status(200).json({
                response
            });
        }
    })
};

exports.findById = (req, res)=>{
    var id = req.params.id;
    Chapita.findById({_id:id}, (err, response)=>{
        if (err) {
            res.status(500).json({
                message: err
            })
        } else {
            res.status(200).json({
                response
            });
        }
    })
}

exports.findOne = (req,res) =>{
    Chapita.findOne({brand: req.params.brand}, (err, response)=>{
        if (err) {
            res.status(500).json({
                message: err
            })
        } else {
            res.status(200).json({
                response
            });
        }
    })
}

exports.remove = (req, res)=>{
    Chapita.remove({_id:req.params.id}, (err, response)=>{
        if (err) {
            res.status(500).json({
                message: err
            })
        } else {
            res.status(200).json({
                response
            });
        }
    })
}