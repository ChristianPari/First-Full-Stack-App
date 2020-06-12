const express = require('express'),
    router = express.Router(),
    QB = require('../models/QB'); // mongoDB collection accessible via variable

router.get('/', (req, res) => { // GET all QBs

    QB.find({})
        .then(allQBs => {

            return res.status(200).json({

                status: 200,
                message: 'Quarterbacks',
                players: allQBs

            });

        })
        .catch(err => {

            return res.status(500).json({

                status: 500,
                message: err.message

            });

        });

});

router.get('/:id', (req, res) => { // GETs a single QB from the DB

    QB.findById(req.params.id)
        .then(qbDoc => {

            return res.status(200).json({

                status: 200,
                message: `Grabbed QB '${qbDoc.name.first} ${qbDoc.name.last}' from Database`,
                qb_data: qbDoc

            });

        })
        .catch(err => {

            return res.status(500).json({

                status: 500,
                message: err.message

            });

        });

});

router.post('/', async(req, res) => { // CREATE/POST a new QB

    try {

        const newQB = new QB(req.body);

        await QB.create(newQB);

        return res.status(201).json({

            status: 201,
            message: "Added Quarterback to Database",
            new_qb: newQB

        });

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message,
            error: err

        });

    }

});

router.delete('/:id', (req, res) => { // DELETE a QB from the request body JSON data

    QB.findOneAndDelete({ _id: req.params.id })
        .then(removedQB => {

            return res.status(200).json({

                status: 200,
                message: "QB Removed from Database",
                removed_qb: removedQB

            });

        })
        .catch(err => {

            return res.status(500).json({

                status: 500,
                message: err.message

            });

        });

});

router.patch('/:id', async(req, res) => { // UPDATE a QB with the request body

    //* WASNT SURE WHICH WORKED BETTER SO I KEPT BOTH

    const oldQB = await QB.findOne({ _id: req.params.id });

    await QB.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedQB => {

            return res.status(201).json({

                status: 201,
                message: "Quarterback Statistics Updated",
                updated: updatedQB,
                old: oldQB

            });

        })
        .catch(err => {

            return res.status(500).json({

                status: 500,
                message: err.message

            });

        });

    // try {

    //     const oldQB = await QB.findById(req.params.id);

    //     await QB.findByIdAndUpdate(req.params.id, req.body)

    //     return res.status(201).json({

    //         status: 201,
    //         message: "Quarterback Statistics Updated",
    //         updated: await QB.findById(req.params.id),
    //         old: oldQB

    //     });


    // } catch (err) {

    //     return res.status(500).json({

    //         status: 500,
    //         message: err.message

    //     });

    // };

});

module.exports = router;