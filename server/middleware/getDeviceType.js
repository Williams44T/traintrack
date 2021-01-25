module.exports = (req, res, next) => {
  const ua = req.userAgent;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    req.device = 'tablet';
    return next();
  }

  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    req.device = 'mobile';
    return next();
  }

  req.device = 'desktop';
  return next();
};

//I don't know regex; found this solution at the following link:
//https://dev.to/itsabdessalam/detect-current-device-type-with-javascript-490j
