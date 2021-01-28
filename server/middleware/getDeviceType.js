module.exports = (req, res, next) => {
  if (req.url !== '/') { return next(); }
  const ua = req.get('user-agent');
  req.url = '/desktop' + req.url;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    req.url = '/tablet' + req.url;
    return next();
  }

  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    req.url = '/mobile' + req.url;
    return next();
  }
  console.log(req.url);
  next();
};

/*
I'm unsure how regex works. I used to following two links to write this middleware:
This one to figure out how to get the user-agent string:
    https://dev.to/itsabdessalam/detect-current-device-type-with-javascript-490j
This one for the regex part:
    https://gist.github.com/ninjascribble/5119003
*/
