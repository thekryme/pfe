var express = require('express');
var router = express.Router();
//var db = require('./db');


/* GET home page. */
router.get('/', function(req, res, next) {
  /*var sql = "select * from IOTA_COURS";
  console.log(db.query(sql));*/
  res.render('login', { title: 'Express' });
});

// POST method route
router.post('/', function (req, res) {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;

    if(username == "kevin" && password == 123456){
        res.render('index', {title: 'Bienvenue '+username})
    }
    res.send('POST request to the homepage');
});

module.exports = router;
