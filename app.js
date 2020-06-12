require('dotenv').config(); // allows you to access and use the env properties
const express = require('express'), // creates an express object so we can access its methods and properties
    morgan = require('morgan'), // creates a morgan object and allows us to access its methods and proerties
    app = express(), // intializes the app variable as a express server
    port = process.env.PORT || 5000, // access and use the PORT property
    connectDB = require('./dbConnection'), // a middleware function that sets up the connection to the database
    spacer = require('./spacer');

//* ############### Global Middleware ###############
// effects all routes of the server
app.use(morgan('dev')); // makes program log to the console the data from a request on the server
app.use(express.json()); // a bodyParser middleware; recoginizes incoming data as JSON

connectDB(); // calls fuction that sets up the DB connection

//* ############### Route Handling ###############
const homeRouter = require('./routes/homeRouter'), // route handling for root route
    qbsRouter = require('./routes/qbsRouter'); // route handling for quarterbacks route

app.use('/', homeRouter); // tells server to run homeRouter middleware when a request is made to the root route
app.use('/qbs', qbsRouter);

app.listen(port, () => { // runs callback on program start; connects to the specified port number

    console.log(

        spacer(`Listening on port: ${port}`) +
        `\nListening on port: ${port}\n` +
        spacer(`Listening on port: ${port}`) +
        '\n'

    );

});