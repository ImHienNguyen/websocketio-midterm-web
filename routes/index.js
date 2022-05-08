var express = require('express');
var router = express.Router();
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const connect = require('../database/db')

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('chat', { title: 'Express' });
});

router.get('/m', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get("/login", (req, res) => {
	res.render('login', { title: 'Login' })
})

router.post("/login", (req, res) => {
	let resultValidate = validationResult(req);
	let {email} = req.body;
	console.log(email)
    if (resultValidate.errors.length === 0) {
		connect.query('select * from account where email=?', [email], (err, result) => {
			if (err) {
				req.session.flash = {
					type: "danger",
					intro: "Oops!",
					message: "Your email not match"
				}
				return res.redirect('/login')
			}
			else {
				req.session.flash = {
					type: "success",
					intro: "Congratulation!",
					message: "Your account has been successfully logged in!!!!"
				}
				return res.redirect("/")
			}
		})
       
    } else {
        const errors = resultValidate.mapped()
        console.log(errors)
        let errorMessage = errors[Object.keys(errors)[0]].msg
        console.log("OK")
        console.log({
            type: "danger",
            intro: "Oops!",
            message: errorMessage
        })
        req.session.flash = {
            type: "danger",
            intro: "Oops!",
            message: errorMessage
        }
        res.redirect('/login')
    }
})

router.get('/register', (req, res) => {
	res.render('register', { title: "Register" })
})

router.post('/register', (req, res) => {
	let result = validationResult(req);
    if (result.errors.length === 0) {
        const { name, email, password } = req.body
        console.log(name, email, password);

		const sql = "insert into account(name, email,password) values(?,?,?)"
		const saltRounds = 10;
		bcrypt.hash(password, saltRounds, (err, hash) => {
			const value = [name,email, hash]
			connect.query(sql, value, (err) => {
				if (err) {
					req.session.flash = {
						type: "danger",
						intro: "Oops!",
						message: err.message
					}
					return res.redirect('/register')
				}
				req.session.flash = {
					type: "success",
					intro: "Congratulation!",
					message: "Register successful, Login now!!!!"
				}
				return res.redirect('/register')
			})
		})
        
    } else {
        const errors = result.mapped()
        let errorMessage = errors[Object.keys(errors)[0]].msg
        req.session.flash = {
            type: "danger",
            intro: "Oops!",
            message: errorMessage
        }
        res.redirect('/account/register')
    }
})

module.exports = router;
