var express = require('express');
var router = express.Router();

const experiencesCtrl = require('./../controllers/experiences');


// GET "/locations/experiences/new" - New Route
router.get('/locations/:id/experiences/new', experiencesCtrl.new);


// POST "/locations/:id" - Create Route
router.post('/locations/:id/experiences', experiencesCtrl.create);

// DELETE "/locations/:id" - Create Route
router.delete('/locations/:id', experiencesCtrl.delete);

module.exports = router;