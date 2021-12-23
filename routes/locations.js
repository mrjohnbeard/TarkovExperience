var express = require('express');
var router = express.Router();
const locationsCtrl = require('../controllers/locations');
const isLoggedIn = require('../config/auth');

// GET "/locations/new" - New Route
router.get('/new', isLoggedIn, locationsCtrl.new);


// GET "/locations/:id" - Show Route
router.get('/:id', locationsCtrl.show);



router.get('/edit/:id', locationsCtrl.editPage);

router.put('/:id', locationsCtrl.edit);


// POST "/locations" - Create Route
router.post("/", isLoggedIn, locationsCtrl.create);

// GET "/locations" - Index Route
router.get('/', locationsCtrl.index);


module.exports = router;
