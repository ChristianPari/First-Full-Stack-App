const mongoose = require('mongoose'), // allows us to access mongoose's methods and properties
    mongoURI = process.env.MONGO_URI, // accessing envs' property MONGO_URI
    depOpts = { // deprecated options for the connect method of mongoose; needed to not get deprecation erros
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    spacer = require('./spacer'); // a middleware function to convert a string to a spacer

function dbConnection() {

    mongoose.connect(mongoURI, depOpts, err => { // runs when connection is fully establihed to DB

        if (err) {

            console.log(`Error: ${err}`);

        } else {

            console.log(
                spacer('Connection Established to Database') +
                '\nConnection Established to Database\n' +
                spacer('Connection Established to Database') +
                '\n');

        }

    });

    mongoose.connection.on('error', err => { // runs on error during the attempt to connect

        console.log(
            spacer('An error occured when trying to connect to MongoDB:') +
            `\nAn error occured when trying to connect to MongoDB:\n${err}\n` +
            spacer('An error occured when trying to connect to MongoDB:') +
            '\n');

    });

    mongoose.connection.on('connected', () => { // runs while the server is connecting to the DB

        console.log(
            spacer('Connecting') +
            '\nConnecting\n' +
            spacer('Connecting') +
            `\nURI: ${mongoURI}\n`);


    });


};

module.exports = dbConnection; // must export to user/require in other files