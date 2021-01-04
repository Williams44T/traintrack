var $ = require('jquery');

var assignSession = (req, res, next) => {
  if (req.cookies.traintracks !== undefined) {
    req.session = req.cookies.traintracks;
  }

  //get the session
  //if error
    var id = createSession();
    req.
  //assign session to the req
}

var createSession = () => {
  //create session
  //return session id
};