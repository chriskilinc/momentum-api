const { fetchRealtimeApi } = require("../utils/realtidsinformation4");

async function getTimetables(req, res) {
  const stationId = req.params.id || "9731";
  const timespan = req.params.timespan || "30";

  try {
    let timetable = await fetchRealtimeApi(stationId, timespan);

    //  Build meta data
    let data = {
      meta: {
        stationId: stationId,
        timespan: timespan,
        fetched: new Date(Date.now()),
        updatedData: new Date(Date.now())
      },
      timetable: null
    };

    if (timetable) {
      data.timetable = timetable;
      data.meta.updatedData = timetable.LatestUpdate;
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

module.exports = { getTimetables };
