var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var dbConn  = require('../lib/db');
var url = require('url');


/* GET all users record. */
router.get('/', function(req, res, next) {

  dbConn.query('SELECT * FROM user ORDER BY id asc', function(err, result, fields, rows)     {
    console.log(result);
    res.send(result);
    res.end();

  });
});

// Search for a user based on the filter "username=<value>"
router.get('/get', function(req, res, next)  {

  const q = url.parse(req.url, true);
  const qdata = q.query; //returns a JSON object: { username: "johnnyb" }
  const fullname = qdata.name + " " + qdata.lastname;

  var form_data = {
    username: qdata.username
  };

  console.log(form_data);
  dbConn.query('SELECT * FROM user WHERE ?', form_data, function(err, result, fields, rows)     {
    //if(err) throw err
    if (err) throw err;
    // if user not found
    if (result.length <= 0) {
      console.log("User not found. It does not exists in the database!");
      res.status(404).send("User not found. It does not exists in the database!");
    } else {
      const fullname = result[0].name + " " + result[0].lastname;
      console.log("Showing record found: \n", result);
      res.send(fullname);
      res.end();
      //res.redirect('/users');
    }
  })

});

// POST - Add users to the database
router.post('/set', (req, res, next) => {
  const q = url.parse(req.url, true);
  const qdata = q.query; //returns an object: { "username": "johnnyb", "name": "Johnny", "lastname": "Bravo" }

  var form_data = {
    username: qdata.username,
    name: qdata.name,
    lastname: qdata.lastname
  }

  // Insert query
  dbConn.query('INSERT INTO user SET ?', form_data, function(err, result) {
    //if(err) throw err
    if (err) {
      throw err;
    } else {
      console.log("SUCCESS: 1 record inserted \n", result);
      res.send(`A user ${qdata.name} ${qdata.lastname} with username: ${qdata.username} was added to the database!`);
      //res.redirect('/users');
    }
  })
});

module.exports = router;
