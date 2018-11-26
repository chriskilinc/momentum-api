const router = require('express').Router();
const timetableController = require('../controllers/timetableController');

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify('/api/timetable/:id'));
});

router.get('/:id', timetableController.getTimetables);

module.exports = router;
