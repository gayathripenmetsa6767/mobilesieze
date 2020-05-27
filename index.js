var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/mobilesieze');
var collection = db.get('admin');




/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});



router.get('/dashboard',function(req,res){
	res.render('dashboard');
});

router.get('/overall',function(req,res){
	res.render('overall')
});

router.get('/office',function(req,res){
	res.render('office');
});
router.get('/return',function(req,res){
	res.render('return');
});

router.get('/returnpop',function(req,res){
	res.render('returnpop')
});
router.post('/postadmin',function(req,res){
	//console.log(req.body)
	var username1 = req.body.username;
	var password1 = req.body.password;
	collection.findOne({"username":username1,"password":password1},function(err,docs){
		if(docs){
			console.log('login successful')
			res.send(docs)
		}
		else{
			console.log(err);
		}
	});

});

module.exports = router;
