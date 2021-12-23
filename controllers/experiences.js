module.exports = {
  new: newExperience,
  create,
  delete: deleteExperience,
};

const Location = require('./../models/location');
const Experience = require('./../models/location');


function newExperience(req, res) {
  res.render('experiences/new', {
    title: `Add Experience`,
    locationNo: req.params.id
  })
};

function create(req, res) {
  Location.findById(req.params.id, function (err, location) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    location.experiences.push(req.body);
    location.save(function (err) {
      if (err) console.log(err);
      console.log(location);
      res.redirect(`/locations/${location._id}`);
    });
  });
}

function deleteExperience(req, res, next) {
  Location.findOne({ "experiences._id": req.params.id }).then(function (location) {
    const experience = location.experiences.id(req.params.id);
    if (!experience.user.equals(req.user._id)) return res.redirect(`/locations/${location._id}`);
    experience.remove();
    location.save()
      .then(function () {
        res.redirect(`/locations/${location._id}`);
      })
      .catch(function (err) {
        return next(err);
        // res.redirect(`/locations/${location._id}`);
      });
  });
}
