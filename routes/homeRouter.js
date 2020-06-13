const express = require('express'), // allows access to express methods and objects
    router = express.Router(); // allows you to create route handling

router.use(express.static(process.cwd() + '/public/homeStatic/'));
//^ need to specifiy the static folder for each route if using multiple routes

router.get('/', (req, res) => {

    res.sendFile(process.cwd() + '/homeStatic/index.html');

});

module.exports = router; // needed to use and this handling elsewhere