const Location = require("../models/location");
const Experience = require('../models/experience');

module.exports = {
    index,
    show,
    new: newLocation,
    create,
};

function index(req, res) {
    Location.find({}, function (err, locations) {
      if (err) {
        console.log(err);
      }
      res.render('locations/index', { 
        title: "All Locations",
        locations 
      });
  
    });
  }

  function show(req, res) {
    Location.findById(req.params.id, function (err, location) {
      Experience.find({location: location._id}, function(err, experiences) {
        res.render('location/show', { 
          title: "Location Detail", 
          location,
          experience
         });
      });
    });
  };
  


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
      console.log(location);
      res.redirect('/locations');
    });
  }