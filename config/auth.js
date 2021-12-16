module.exports = function(req, res, next) {
    // if there is a user, keep the pipeline flowin!
    if (req.isAuthenticated()) return next();
    // if not, redirect to login page
    res.redirect('/auth/google');
  }