var express = require('express');
var sql = require("mssql");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Login', menuId:'home',message:''});
});

/* Post email and password to login page. */
router.post('/login', function (req, res, next) {
    
    var email = req.body.email;
    var password = req.body.password;

    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost', 
        database: 'SchoolDB' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query("select * from Student where email like '"+email, function (err, results) {
            
            
           
				if (err) {
				   //Show Error message if any network issue
				    res.render('index', {page:'Login', menuId:'home',message:'Some Technical Error Ocurred, Please Try After Some Time.'});
				  }else{
				    
				    if(results.length >0){
				      if(results[0].password == password){
				        res.render('/loginsuccess', {page:'Login', menuId:'home'});
				      }
				      else{
                           //Show Error message if email or Password does not match
				        res.render('index', {page:'Login', menuId:'home',message:'Email or password does not match.'});
				      }
				    }
				    else{
				      res.render('index', {page:'Login', menuId:'home',message:'Email does not exits.'});
				    }
				  }
            
        });
    });
    
  
});
router.get('/loginsuccess', function(req, res, next) {
  res.render('loginsuccess', {page:'LoginSucess', menuId:'home'});
});

module.exports = router;
