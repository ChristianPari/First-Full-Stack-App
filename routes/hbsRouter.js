const express = require('express'),
    router = express.Router(),
    HB = require('../models/HB'); // mongoDB collection accessible via variable

router.get('/', (req, res) => {

    try {

        res.sendFile(process.cwd() + '/public/HBsStatic/HBs.html');

    } catch (err) {

        res.status(500).json({

            status: 500,
            message: err.message

        });

    };

});

router.get('/all', (req, res) => { // GET all HBs

    HB.find({})
        .then(allHBs => {

            return res.status(200).json({

                status: 200,
                message: 'Halfbacks',
                players: allHBs

            });

        })
        .catch(err => {

            return res.status(500).json({

                status: 500,
                message: err.message

            });

        });

});

router.get('/:id', (req, res) => { // GETs a single HB from the DB

    try {

        res.sendFile(process.cwd() + '/public/hbsStatic/singleHB.html');

    } catch (err) {

        res.status(500).json({

            status: 500,
            message: err.message

        });

    };

});

router.get('/:id/stats', (req, res) => { // GETs a single QB from the DB

    HB.findById(req.params.id)
        .then(hbDoc => {

            return res.status(200).json({

                status: 200,
                message: `Grabbed HB '${hbDoc.name.first} ${hbDoc.name.last}' from Database`,
                hb_data: hbDoc

            });

        })
        .catch(err => {

            return res.status(500).json({

                status: 500,
                message: err.message

            });

        });

});

router.post('/', async(req, res) => { // CREATE/POST a new HB

    try {

        const newHB = new HB(req.body);

        await HB.create(newHB);

        return res.status(201).json({

            status: 201,
            message: "Added Halfback to Database",
            new_HB: newHB

        });

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message,
            error: err

        });

    }

});

router.delete('/:id', (req, res) => { // DELETE a HB from the request body JSON data

    HB.findOneAndDelete({ _id: req.params.id })
        .then(removedHB => {

            return res.status(200).json({

                status: 200,
                message: "HB Removed from Database",
                removed_HB: removedHB

            });

        })
        .catch(err => {

            return res.status(500).json({

                status: 500,
                message: err.message

            });

        });

});

router.patch('/:id', async(req, res) => { // UPDATE a HB with the request body

    //* WASNT SURE WHICH WORKED BETTER SO I KEPT BOTH

    const oldHB = await HB.findOne({ _id: req.params.id });

    await HB.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedHB => {

            return res.status(201).json({

                status: 201,
                message: "Halfbacks Statistics Updated",
                updated: updatedHB,
                old: oldHB

            });

        })
        .catch(err => {

            return res.status(500).json({

                status: 500,
                message: err.message

            });

        });

    // try {

    //     const oldHB = await HB.findById(req.params.id);

    //     await HB.findByIdAndUpdate(req.params.id, req.body)

    //     return res.status(201).json({

    //         status: 201,
    //         message: "Quarterback Statistics Updated",
    //         updated: await HB.findById(req.params.id),
    //         old: oldHB

    //     });


    // } catch (err) {

    //     return res.status(500).json({

    //         status: 500,
    //         message: err.message

    //     });

    // };

});

module.exports = router;