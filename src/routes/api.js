const router = require('express').Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify('/api/v1/timetable'));
});

module.exports = router;
