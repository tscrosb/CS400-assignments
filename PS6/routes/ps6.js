const express = require('express');
const router = express.Router();

const fetch = require("node-fetch");
const db = require('../mongo/mongo');
let datavals;



//db.connect....

db.connect(function(err,client) {
    if (err){
        console.log(`Err ${err}`);
        //return;
    }

    console.log("succ2");
});


router.get('/', function(req,res,next){
    let mongo = db.getDB();
    let NuminDB = mongo.collection("TheCoins").count((err,result) => {
        console.log("counted");
        console.log(`NuminDB =  ${result}`);
        if (result>0){
            const storedValue = mongo.collection("TheCoins").findOne({}, (err,result) => {
                //console.log(result);
                res.render('ps6',{title:`Bitcoin Price in USD from database is`, paras: `${result.bpi.USD.rate}`});
            }); //add callback
            console.log(storedValue);



        }
    });
    console.log(NuminDB);

    if (NuminDB){
        const storedValue = mongo.collection("TheCoins").findOne({}, (err,result) => {
        });
        console.log(storedValue);
        res.render('ps6',{title:`Bitcoin Price in USD from database is  ${storedValue.bpi.USD.rate}`});


    }

    else{

        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("success");
                datavals = data;
                let bitcoinValue = data.bpi.USD.rate;
                res.render('ps6',{title:'Bitcoin Price in USD', paras: `The current price is ${data.bpi.USD.rate}`});
                mongo.collection("TheCoins").insertOne(datavals,function(err,r){
                })
                    .catch(err => {
                        res.render('index',{title:"An error has occured"});
                    })


            })
    }

})

module.exports = router;