module.exports = (req, res, next) => {
  const ua = req.get('user-agent');
  req.device = 'desktop';

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    req.device = 'tablet';
    return next();
  }

  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    req.device = 'mobile';
    return next();
  }

  return next();
};

/*
I unsure how regex works. I used to following two links to write this middleware:
This one to figure out how to get the user-agent string:
    https://dev.to/itsabdessalam/detect-current-device-type-with-javascript-490j
This one for the regex part:
    https://gist.github.com/ninjascribble/5119003
*/
