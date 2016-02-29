var async = require('async');
var dc = require('mcp_db').dc;
var moment = require('moment');
var cons=require('mcp_constants');
var userType=cons.userType;



var initTerm = function () {
    async.waterfall([
        function (cb) {
            dc.init(function (err) {
                cb(err);
            });
        },
        function (cb) {
            var table = dc.main.get("customer");
            table.drop(function (err, data) {
                table.create(function(err){
                    var body = {};
                    body.userId = 'Q0001';
                    body.type = userType['CHANNEL'];
                    body.name = '测试账户';
                    body.st = 'adminlsidjnDoskdoffFFF';
                    body.createTime = moment();
                    table.save(body,[],function(err){
                        if(err){
                            console.log(err);
                        }
                        cb(null);
                    });
                });
            });
        },
        function (cb) {
            cb(null, "success");
        }
    ], function (err, result) {
        console.log("end...........");
    });
};


initTerm();

