const request = require("tinyreq");
const cheerio = require("cheerio");
const express = require('express');
var fs = require('fs');
var htmlToText = require('html-to-text');
const app = express();


var uri = "http://www.huffingtonpost.ca/2017/06/23/tom-mulcair-raises-red-flags-after-canadian-sniper-breaks-record_a_22674220/?utm_hp_ref=ca-homepage";
        request(uri, function (err, body) {
            if(!err){
                var $ = cheerio.load(body);
                $('p').filter(function(){
                var data = $(this);
                var text = htmlToText.fromString(data, {
                wordwrap: 130
                });

                fs.writeFile('buffer.txt','', function(err) {
                    if (err) throw err;
                });

                fs.appendFile('buffer.txt', text, function (err) {
                if (err) {
                    // append failed
                } else {
                    // done
                }
})

                console.log(text);
            })
            
        }

    })





