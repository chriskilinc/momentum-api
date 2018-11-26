getTimetables = (req, res) => {
  const stationId = req.params.id;

  //  Validate Station Id ( Validate with regex and maybe even through api call to SL if it even exists )

  //  Fetch SL timetables by 'stationId'

  //  Build json object

  //  Send json object
  res.status(200).send({
    stationId: stationId
  });

  //  Catch Errors
};

module.exports = { getTimetables };
