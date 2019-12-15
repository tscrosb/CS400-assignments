var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('formIndex', { title: 'Express' });
});


router.route('/')
    .get(function (req,res,next) {
        res.send(`The input is ${req.params.word}`);
    })

    .post(function (req,res,next) {
        const wordvar = req.body.wordName;
        const lenvar = wordvar.length;
        res.send(`The word is ${wordvar}, the length is ${lenvar}`);
    })

    .put(function (req,res,next){
        res.send(`The input is ${req.params.word}`)


    })


module.exports = router;