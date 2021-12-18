module.exports = {
    new: newExperience,
    create,
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

