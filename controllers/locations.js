const Location = require("../models/location");
// const Experience = require('../models/experience');

module.exports = {
    index,
    show,
    new: newLocation,
    create,
    edit: editLocation,
    editPage,
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
        res.render('locations/show', { 
          title: "Location Detail", 
          location,
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

  
function editLocation(req, res) {
  Location.findOneAndUpdate({_id: req.params.id}, 
    req.body,
    {new: true},
    function(err, location) {
      if (err || !location) return res.redirect('/locations');
      res.redirect(`/locations/${location._id}`);
    });
    }

    function editPage(req, res) {
      Location.findById(req.params.id, function (err, location) {
          res.render('locations/edit', { 
            title: "Location Detail", 
            location,
           });
        });
    };
    