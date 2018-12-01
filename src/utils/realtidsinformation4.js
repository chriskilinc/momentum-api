const axios = require('axios');
const { keyRealtime4 } = require('../config/keys');

function fetchRealtimeApi(stationId, timespan) {
  try {
    const url = `http://api.sl.se/api2/realtimedeparturesv4.json?key=${keyRealtime4}&siteid=${stationId}&timewindow=${timespan}`;
    return axios.get(url).then(res => {
      console.log(res.data);
      res.data.ResponseData.Message = res.data.Message;

      return res.data.ResponseData;
    });
  } catch (error) {
    throw new Error("Could Not Fetch 'Realtidsinformation 4'");
  }
}

module.exports = { fetchRealtimeApi };
