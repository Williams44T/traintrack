var createSession = () => {
  return Math.random() * 1000000 + 100000;
};

module.exports = (req, res, next) => {
  if (req.cookies.traintracks !== undefined) {
    req.body.session = req.cookies.traintracks;
  } else {
    req.body.session = createSession();
    res.cookie('traintracks', req.body.session);
  }
  next();
};

