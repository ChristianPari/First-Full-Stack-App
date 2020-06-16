const express = require('express'), // allows access to express methods and objects
    router = express.Router(); // allows you to create route handling

router.get('/', (req, res) => {

    res.sendFile(process.cwd() + '/public/homeStatic/index.html');

});

module.exports = router; // needed to use and this handling elsewhere