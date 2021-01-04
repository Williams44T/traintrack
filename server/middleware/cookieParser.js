module.exports = (req, res, next) => {
  if (req.headers.cookie === undefined) { return next(); }

  var cookies = req.headers.cookie.split(';');

  cookies.forEach(cookie => {
    //cookieID to left of '='; cookie to right of '='
    var cookie = cookie.split('=');
    req.cookies[cookie[0]] = cookie[1];
  });

  next();
};