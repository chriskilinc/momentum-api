const port = process.env.PORT || 3000; //  Configures the application PORT to either the current enviorments port OR if enviorment port is not set, port '3000'
const express = require('express');
const app = express();

const defaultRoute = require('./routes/default');
const apiRoute = require('./routes/api');
const timetableRoute = require('./routes/timetable');

//  Default Route
app.use('/', defaultRoute);

// Api Route
app.use('/api', apiRoute);

//  Timetable Route
app.use('/api/v1/timetable', timetableRoute);

app.listen(port, () => console.log(`Listening on port ${port}...`));
