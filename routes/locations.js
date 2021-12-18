var express = require('express');
var router = express.Router();
const locationsCtrl = require('../controllers/locations');
const isLoggedIn = require('../config/auth');

// GET "/locations/new" - New Route
// router.get('/new', isLoggedIn, locationsCtrl.new);

// POST "/locations" - Create Route
// router.post("/", isLoggedIn, locationsCtrl.create);

// GET "/locations" - Index Route
router.get('/', locationsCtrl.index);

// GET "/locations/:id" - Show Route
// router.get('/:id', locationsCtrl.show);

module.exports = router;
