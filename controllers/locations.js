const Location = require("../models/location");

module.exports = {
    index,
};

function index(req, res) {
    Flight.find({}, function (err, flights) {
      if (err) {
        console.log(err);
      }
      res.render('locations/index', { 
        title: "All Locations",
        locations 
      });
  
    });
  }