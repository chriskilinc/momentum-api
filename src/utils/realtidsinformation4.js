const axios = require('axios');
require('dotenv').config();
const keyRealtime4 = process.env.APIKEYRT4;

function fetchRealtimeApi(stationId, timespan) {
  try {
    const url = `http://api.sl.se/api2/realtimedeparturesv4.json?key=${keyRealtime4}&siteid=${stationId}&timewindow=${timespan}`;
    return axios.get(url).then(res => {
      console.log(`Fetching api id: ${stationId}, timespan: ${timespan} `);
      if (res.data.Message) {
        res.data.ResponseData.Message = res.data.Message;
      }
      return res.data.ResponseData;
    });
  } catch (error) {
    throw new Error("Could Not Fetch 'Realtidsinformation 4'");
  }
}

module.exports = { fetchRealtimeApi };
