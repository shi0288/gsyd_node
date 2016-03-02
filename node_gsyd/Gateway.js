var express = require('express'), app = express();
var http = require('http');
var async = require('async');
var httpServer = http.createServer(app);

var config = require("mcp_config");
var errCode = config.ec;
var prop = config.prop;

var cmdFac = require("mcp_factory").cmdFac;
var dc = require('mcp_db').dc;

var moment=require("moment");

var esut = require("easy_util");
var log = esut.log;

var Gateway = function () {
    var self = this;
};


Gateway.prototype.start = function () {
    var self = this;
    async.waterfall([
        //connect db
        function (cb) {
            dc.init(function (err) {
                cb(err);
            });
        },
        //校验基础数据的可用性
        function (cb) {
            dc.check(function (err) {
                cb(err);
            });
        },
        //start web
        function (cb) {
            self.startWeb();
            cb(null, "success");
        }
    ], function (err, result) {
        if (err) {
            log.error(err); // -> null
        }
        else {
            log.info(result); // -> 16
        }
    });
};

Gateway.prototype.startWeb = function () {
    var self = this;
    //是Connect內建的middleware，设置此处可以将client提交过来的post请求放入request.body中
    app.use(express.bodyParser());
    //是Connect內建的，可以协助处理POST请求伪装PUT、DELETE和其他HTTP methods
    app.use(express.methodOverride());
    //route requests
    app.use(app.router);
    app.configure('development', function () {
        app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    });

    app.configure('production', function () {
        app.use(express.errorHandler());
    });

    app.post("/gs-filter/main/interface.htm", function (req, res) {
        var message = req.body.message;
        self.handle(message, function (backMsgNode) {
            res.json(backMsgNode);
          //  log.info(backMsgNode);
        });
    });

    app.get("/gs-filter/main/interface.htm", function (req, res) {
        var message = req.query.message;
        self.handle(message, function (backMsgNode) {
            res.json(backMsgNode);
          //  log.info(backMsgNode);
        });
    });

    log.info("Gateway程序在端口" + prop.gtPort + "启动.........");
    httpServer.listen(prop.gtPort);
};

Gateway.prototype.handle = function (message, cb) {
    var self = this;
    try {
        var msgNode = JSON.parse(message);
        var headNode = msgNode.head;
        var bodyStr = msgNode.body;
        cmdFac.handle(headNode, bodyStr, function (err, bodyNode) {
            var backHeadNode = {};
            backHeadNode.messageid = headNode.messageid;
            backHeadNode.version = headNode.version;
            backHeadNode.userId = headNode.userId;
            backHeadNode.cmd = headNode.cmd;
            backHeadNode.timestamp = moment(new Date()).format("YYYYMMDDHHmmss");
            if (bodyNode == undefined) {
                bodyNode = {};
            }
            if (err) {
                bodyNode.repCode = err.repCode;
                bodyNode.description = err.description;
            }
            else {
                bodyNode.repCode = errCode.E0000.repCode;
                bodyNode.description = errCode.E0000.description;
            }
            var decodedBodyStr = JSON.stringify(bodyNode);
            cb({head: backHeadNode, body: decodedBodyStr});
        });
    }
    catch (err) {
        cb({head: {digestType: "MD5"}, body: JSON.stringify(errCode.E0005)});
        return;
    }
};

var gateway = new Gateway();
gateway.start();