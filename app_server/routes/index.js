var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
/* LOCATIONS.js */
router.get('/', ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);
/*OTHERS.js*/
router.get('/about',ctrlOthers.about);

module.exports = router;