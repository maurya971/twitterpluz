//const authenticate = require("../auth/authenticate.js");
const express = require('express');
const router = express.Router();
const UserService = require("../services/UserService.js")

router.get('/getDetails', require('connect-ensure-login').ensureLoggedIn(), function(req, res){
	console.log("UserId "+ req.param("id"));
	UserService.getUserDetailById(req.param("id"), function(err, userDetail){
		if (err) {
			res.json(err);
		} else {
			var data = {
					'success': true,
					'message' : "user detail found successfully",
					'data': userDetail
			};
			res.json(data);
		}
	});
});

module.exports = router;