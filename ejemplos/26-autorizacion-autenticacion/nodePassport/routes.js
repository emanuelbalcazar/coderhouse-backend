// ------------------------------------------------------------------------------
//  ROUTING
// ------------------------------------------------------------------------------

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  INDEX
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getRoot(req, res) {
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  LOGIN
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getLogin(req, res) {
  if (req.isAuthenticated()) {

    var user = req.user;
    console.log('user logueado');
    res.render('login-ok', {
      usuario: user.username,
      nombre: user.firstName,
      apellido: user.lastName,
      email: user.email
    });
  }
  else {
    console.log('user NO logueado');
    res.sendFile(__dirname + '/views/login.html');
  }
}

function getSignup(req, res) {
    res.sendFile(__dirname + '/views/signup.html');
}


function postLogin (req, res) {
  var user = req.user;
  //console.log(user);

  //grabo en user fecha y hora logueo
  res.sendFile(__dirname + '/views/index.html');
}

function postSignup (req, res) {
  var user = req.user;
  //console.log(user);

  //grabo en user fecha y hora logueo
  res.sendFile(__dirname + '/views/index.html');
}

function getFaillogin (req, res) {
  console.log('error en login');
  res.render('login-error', {
  });
}

function getFailsignup (req, res) {
  console.log('error en signup');
  res.render('signup-error', {
  });
}



function getLogout (req, res) {
  req.logout();
  res.sendFile(__dirname + '/views/index.html');
}

function failRoute(req, res){
  res.status(404).render('routing-error', {});
}

module.exports = {
    getRoot,
    getLogin,
    postLogin,
    getFaillogin,
    getLogout,
    failRoute,
    getSignup,
    postSignup,
    getFailsignup
}
