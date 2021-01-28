module.exports = (req, res, next) => {
  console.log('at cookie parser', req.url);
  req.cookies = {};
  if (req.headers.cookie === undefined) { return next(); }

  var cookies = req.headers.cookie.split(' ').join('').split(';');

  cookies.forEach(cookie => {
    //cookieID to left of '='; cookie to right of '='
    var cookie = cookie.split('=');
    req.cookies[cookie[0]] = cookie[1];
  });

  next();
};