const axios = require('axios');
const { fetchRealtimeApi } = require('../utils/realtidsinformation4');

async function getTimetables(req, res) {
  const stationId = req.params.id;
  const timespan = req.params.timespan;

  try {
    let timetable = await fetchRealtimeApi(stationId, timespan);
    res.status(200).send(timetable);
  } catch (error) {
    res.status(500).send({ error: error });
  }

  // const data = axios
  //   .get(
  //     `http://api.sl.se/api2/realtimedeparturesv4.json?key=${keyRealtime4}&siteid=9192&timewindow=5`
  //   )
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).send(err);
  //   });

  // res.status(200).send(data);
}

module.exports = { getTimetables };
