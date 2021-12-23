var express = require('express');
var router = express.Router();

const experiencesCtrl = require('./../controllers/experiences');



router.get('/locations/:id/experiences/new', experiencesCtrl.new);



router.post('/locations/:id/experiences', experiencesCtrl.create);


router.delete('/experiences/:id', experiencesCtrl.delete);



module.exports = router;