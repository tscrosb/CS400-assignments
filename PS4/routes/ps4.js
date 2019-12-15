const express = require('express');
const router = express.Router();

const fetch = require("node-fetch");

router.get('/',function(req,res,next){

    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("success");
            //console.log(data);
            let bitcoinValue = data.bpi.USD.rate;

            res.render('ps4',{title:'Price in USD', paras:data.bpi.USD.rate});

        })
        .catch(err => {
            res.render('index',{title:"An error has occured"});
        })


})


module.exports = router;