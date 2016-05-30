#!/usr/bin/env node
/**
* dl2-stats.js
*/

var client = require('cheerio-httpcli');

client.fetch('https://card.dartslive.com/t/login.jsp', function (err, $, res, body) {
        console.log(body)
});
