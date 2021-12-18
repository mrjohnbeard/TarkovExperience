module.exports = {
    new: newExperience,
    create,
};

const Experience = require('./../models/experience');

function newExperience(req, res) {
    res.render('experiences/new', {
        title: `Add Experience`,
    })
};

function create(req, res) {
    req.body.location = req.params.id;
    Experience.create(req.body, function (err) {
        res.redirect(`/experiences/${req.params.id}`);
    });
};

