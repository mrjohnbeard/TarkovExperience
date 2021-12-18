const Location = require("../models/location");

module.exports = {
    index,
    new: newLocation,
    create,
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

  function newLocation(req, res) {
    res.render("locations/new",
    { title: "Add Location" }
    );
  }

  function create(req, res) {
    const location = new Location(req.body);
    location.save(function (err) {
      if (err) {
        console.log(err);
        return res.redirect('/locations/new');
      }
      console.log(flight);
      res.redirect('/locations');
    });
  }