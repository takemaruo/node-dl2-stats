#!/usr/bin/env node
/**
* dl2-stats.js
*/

// モジュール node-config を読み込む。
var config = require('config');

// モジュール cheerio-httpcli を読み込む。
var client = require('cheerio-httpcli');

client.fetch('https://card.dartslive.com/t/login.jsp')
.then(function (result) {
        var form = result.$('#login > form');

        form.field({
                i: config.i,
                p: config.p
        });

        // 送信ボタンを押してフォームを送信(コールバック形式)
        // ※上で指定したiとp以外はデフォルトのパラメータ
        form.find('input[type=submit]').click(function (err, $, res, body) {
                // フォーム送信後に移動したページ取得後の処理
//                console.log('Login成功！');

                var playerName = $('h2.playerName').text();
                var torina     = $('p.torina').text();
                
                console.log('"%s" %s', torina,playerName);

                // プレイデータページに移動
                client.fetch('https://card.dartslive.com/t/play/index.jsp')
                .then(function (result) {
                        var myRt = result.$('#refValue').text();
                        var myFlight = result.$('#statusFlValue > span').text();
                        var myStats01 = result.$('.statsAvg > td.stats01').text().match(/\d+\.\d+/);
                        var myStatsCR = result.$('.statsAvg > td.statsCri').text().match(/\d+\.\d+/);
                        var myCuAvg = result.$('.statsAvg > td.statsPra').text().match(/\d+\.\d+/);

                        console.log('Rating:%d  Flight:%s  01:%d  CR.:%d  CU:%d',myRt ,myFlight, myStats01, myStatsCR, myCuAvg );
                });
        });
})
.catch(function (err) {
        console.log(err);
});
