/**
 * Created by shiqm on 16-2-29.
 */
'use strict';

//var async = require('async');
//var util=require('easy_util');
//var digestUtil=util.digestUtil;
//var dateUtil=util.dateUtil;
//
//
//var ll=new Date();
//var a = 0, b = 1;
//for (var i = 0; i < 999999999; i++) {
//    var c = a + b;
//    a = b;
//    b = c;
//}
//console.log(new Date()-ll);

//alert(45.6*13);
//alert(0.7+0.1);//输出0.7999999999999999
//alert(0.6+0.2);//输出0.8

//var arithUtil=require('easy_util').arithUtil;
//
//console.log(arithUtil.add(0.1,0.7));
//console.log(arithUtil.add(0.6,0.2));
//console.log(arithUtil.mul(45.6,13));


var async = require('async');

var objs = [{name:'A'}, {name:'B'}, {name:'C'}];

function doSomething(obj, cb)
{
    console.log("我在做" + obj.name + "这件事!");
    cb("dd", obj);
}

//async.each(objs, function(obj, callback) {
//    doSomething(obj, function(){
//        callback();
//    });
//}, function(err){
//    console.log("err is:" + err);
//});

async.eachSeries(objs, function(obj, callback) {
    doSomething(obj, function(err){
        if(obj.name=='B'){
            callback(err);
        }else{
            callback(null);
        }

    });
}, function(err){
    console.log("err is:" + err);
});


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
//console.log(digestUtil.sha1('guoshangyidai189'));
//
//console.log(dateUtil.toCurrentDate()*100000+1);


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



