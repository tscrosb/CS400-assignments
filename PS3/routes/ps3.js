var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.route('/fixedString/:word')
    .get(function (req,res,next) {
        res.send(`Input is ${req.params.word}`);
    })

    .post(function (req,res,next) {
        res.send(`Input is ${req.wordId.word}`)
    })

    .put(function (req,res,next){
        res.send(`Input is ${req.params.word}`)


    })

module.exports = router;