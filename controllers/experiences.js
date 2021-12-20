module.exports = {
    new: newExperience,
    create,
    delete: deleteExperience
};

const Experience = require('./../models/experience');

function newExperience(req, res) {
    res.render('experiences/new', {
        title: `Add Experience`,
        locationNo: req.params.id
    })
};

function create(req, res) {
    req.body.location = req.params.id;
    Experience.create(req.body, function (err) {
        res.redirect(`/locations/${req.params.id}`);
    });
};

function deleteExperience(req, res, next) {
    Location.findOne({ "experiences._id": req.params.id }).then(function (location) {    
      const experience = location.experience.id(req.params.id);     
      if (!experience.user.equals(req.user._id)) return res.redirect(`/locations/${location._id}`);      
      experience.remove();     
      location.save()
        .then(function () {          
          res.redirect(`/locations/${location._id}`);
        })
        .catch(function (err) {
          return next(err);
          res.redirect(`/locations/${location._id}`);
        });
    });
  }