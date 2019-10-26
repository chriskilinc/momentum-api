const port = process.env.PORT || 8080;
const express = require("express");
const app = express();

const defaultRoute = require("./routes/default");
const apiRoute = require("./routes/api");
const timetableRoute = require("./routes/timetable");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//  Default Route
app.use("/", defaultRoute);

// Api Route
app.use("/api", apiRoute);

//  Timetable Route
app.use("/api/v1/timetable", timetableRoute);

app.listen(port, () => console.log(`Listening on port ${port}....`));
