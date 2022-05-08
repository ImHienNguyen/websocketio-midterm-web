var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('chat', { title: 'Express' });
});

router.get('/m', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/login", (req,res)=>{
  res.render('login', {title: 'Login'})
})

router.get('/register', (req,res)=>{
  res.render('register', {title: "Register"})
})


module.exports = router;
