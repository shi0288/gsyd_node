/**
 * Created by shiqm on 16-2-29.
 */
'use strict';

var async = require('async');
var util=require('easy_util');
var digestUtil=util.digestUtil;

//
//async.waterfall([
//    function(cb){
//        console.log("第一步");
//        cb(null,'我是第一步');
//    },
//    function(data,cb){
//        console.log("第二步");
//        cb(null);
//    },
//    function(cb){
//        console.log("第三步");
//        cb(null);
//    }
//],function(err){
//   console.log('结束');
//});
console.log(digestUtil.sha1('guoshangyidai189'));



//dc.init(function (err) {
//    //var managelog=dc.main.get('managelog');
//    //var cond={};
//    //cond.user_id='admin';
//    //cond.id=digestUtil.createUUID();
//    //cond.des='额是测试测试';
//    //cond.create_time = dataUtil.getCurTime();
//    //managelog.save(cond, [], function (err, data) {
//    //    if (err) {
//    //        console.error('更新项目状态出错');
//    //    } else {
//    //    }
//    //});
//
//
//    var loan = dc.main.get('loan');
//    var bodyNode={};
//    bodyNode.cond={};
//    bodyNode.files={};
//    bodyNode.files.id=1;
//    bodyNode.files.name=1;
//    bodyNode.files.status=1;
//    bodyNode.files.business_type=1;
//    bodyNode.sort={};
//    bodyNode.sort.status={};
//    bodyNode.sort.status.rsss=1;
//    bodyNode.sort.status.sfds=2;
//    bodyNode.sort.status.sggaa=3;
//    bodyNode.sort.status.sssgggg=4;
//    bodyNode.sort.acti=2;
//    bodyNode.sort.sdfdsfsdf='sadfas';
//
//
//
//
//    console.log(typeof bodyNode.sort.status);
//    console.log(typeof bodyNode.sort.acti);
//    console.log(typeof bodyNode.sort.sdfdsfsdf);
//
//
//
//    //bodyNode.skip='2';
//    //bodyNode.limit='10';
//    //
//    //var cursor = loan.find(bodyNode.cond, bodyNode.files, []).sort(bodyNode.sort).limit(bodyNode.skip, bodyNode.limit);
//    //cursor.dateToString();
//    //cursor.toArray(function(err, data){
//    //    for(var key in data)
//    //    {
//    //        var set = data[key];
//    //    }
//    //    var backBodyNode={};
//    //    backBodyNode.rst = data;
//    //    backBodyNode.count = cursor.count(function(err, count){
//    //        backBodyNode.count = count;
//    //        console.log(backBodyNode);
//    //    });
//    //});


