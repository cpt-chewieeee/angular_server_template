var express = require('express');

var router = express.Router();

router.post('/', function(req, res){
	console.log(req.body);

	res.json({
		'msg': 'success'
	});
});
router.post('/create', function(req, res){
	console.log(req.body);

	res.json({
		'msg': 'success'
	});
});

router.post('/special', function(req, res){
	res.json({
		'msg': 'this was posted to /signup/special'
	});
});

module.exports = router;