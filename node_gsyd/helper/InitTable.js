var async = require('async');
var dc = require('mcp_db').dc;


var initTerm = function()
{
    async.waterfall([
        function(cb){
            dc.init(function(err){
                cb(err);
            });
        },
        function(cb)
        {
            var table = dc.main.get("customer");
            table.drop(function(err,data){
                console.log(data);
                cb(err);
            });
            table.isExist(function(err,data){
                console.log(data);
                cb(err);
            });
        },
        function(cb)
        {
            cb(null, "success");
        }
    ], function (err, result) {
        console.log("end...........");
    });
};


initTerm();

