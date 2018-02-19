
const express = require("express");
const router = express.Router();
const passport = require('passport');
const authenticate = require("../auth/authenticate");

router.get('/login', (req, res) => {
    res.send('login');
  });



router.get('/login/twitter',
  passport.authenticate('twitter'));

router.get('/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
  	console.log("/twitter/callback-- success");
  	//res.redirect('/auth/login');
    res.redirect('/');
  });


router.get('/isAuthenticated', function(req, res){
    if (req.isAuthenticated()) {
      req.user.success = true;
      res.send(req.user);
    } else {
      res.send({
      "success": false
    });
    }
    
  });

/**
 * Handle signout routes
 */
router.post('/logout', (req, res) => {
	res.send("Logout");
});

module.exports = router;
