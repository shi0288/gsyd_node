/**
 * Created by shiqm on 16-3-17.
 */
'use strict';

/**
 * Created by w44 on 15-1-12.
 */
var http = require('http');



var HttpUtil = function () {
};


HttpUtil.prototype.sendToNodePlat = function(cmd,body, cb)
{
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length':0
    };

    var opt={
        hostname: '101.201.210.16',
        port: 8080,
        path: '/',
        method: 'get'
    };
    opt.headers = headers;
    var req = http.request(opt, function(res) {
        res.setEncoding('utf8');
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function(){
            console.log("receive:  "+data);
            cb(null, data);
        });
    });
    req.setTimeout(20000, function(){
        cb(new Error("time out"), null);
    });
    req.on('error', function(e) {
        cb(e, null);
    });
    req.write('', "utf8");
    req.end();
};



var httpUtil = new HttpUtil();

httpUtil.sendToNodePlat();

module.exports = httpUtil;