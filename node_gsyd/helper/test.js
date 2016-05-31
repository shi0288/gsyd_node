/**
 * Created by shiqm on 16-2-29.
 */
'use strict';

var async = require('async');
var util = require('easy_util');
var moment = require('moment');
var digestUtil = util.digestUtil;
var dateUtil = util.dateUtil;


var service = require('mcp_service');
var calculateService = service.calculateService;


var util = require('mcp_util');
var dateMathUtil = util.dateMathUtil;

//console.log(dateMathUtil.daysBetween('2016-7-7 12:23:33','2016-06-15 00:00:00'));
//
//console.log(dateMathUtil.dateToString(dateMathUtil.dateMonthAdd('2017-03-23 00:00:00', 31, -11)));
var body = {};
body.deadline = 10;
body.live_deadline = 12;
body.rate = 0.23;
body.live_money = 1000000;
body.final_time = '2017-01-26';
body.day_month = 26;
body.accrue_time = '2016-06-08';


var loanRepayObjArr = calculateService.outDebxCal(body);


//var firstMoneyDaysNum = dateMathUtil.daysBetween(loanRepayObjArr[i].repay_day, loanObj.accrue_time);


//
//var sql = "SELECT loan.name,invest.create_time,invest.money," +
//    "(select sum(invest_repay.money)+sum(invest_repay.interest)+sum(invest_repay.st_interest) " +
//    "from  invest_repay where invest_repay.status=0 and invest.id=invest_repay.invest_id)   as sumWaitMoney  " +
//    "from invest LEFT JOIN loan  on invest.loan_id=loan.id where invest.status=1200 and (loan.status=1400 or loan.status=1500 or loan.status=1600)  and invest.user_id='" + "q001" + "'";
//console.log(sql);


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

//
//var async = require('async');
//
//var objs = [{name:'A'}, {name:'B'}, {name:'C'}];
//
//function doSomething(obj, cb)
//{
//    console.log("我在做" + obj.name + "这件事!");
//    cb("dd", obj);
//}
//
////async.each(objs, function(obj, callback) {
////    doSomething(obj, function(){
////        callback();
////    });
////}, function(err){
////    console.log("err is:" + err);
////});
//
//async.eachSeries(objs, function(obj, callback) {
//    doSomething(obj, function(err){
//        if(obj.name=='B'){
//            callback(err);
//        }else{
//            callback(null);
//        }
//
//    });
//}, function(err){
//    console.log("err is:" + err);
//});


//var temp=new Array();
//temp.push(1);
//temp.push(2);
//temp.push(13);
//temp.push(4);
//
//console.log(temp.length);
//console.log(temp[2]);
//delete temp[2];
//console.log(temp[2]);

//var days = dateMathUtil.daysBetween(dateUtil.getCurTime(true), '2016-04-02');
//console.log(days);
//
//var arr = new Array(5);
//var i=0;
//arr[0]={aaa:333};
//async.eachSeries(arr, function (obj,repayCall) {
//    arr[i]={
//        id:i
//    };
//        i++;
//    console.log(obj);
//    repayCall();
//}, function (err) {
//  console.log('ok');
//});
//console.log(arr);

//var investMoney=10000*100;
//var tempDeadline=10;
//var rate=0.14;
//var sumCorpusCurrent=0;
//for(var i=0;i<tempDeadline;i++){
//    var everyMonthRepayMoney = Math.round((investMoney * (rate / 12) * Math.pow(
//            (1 + rate / 12), tempDeadline))
//        / (Math.pow((1 + rate / 12), tempDeadline) - 1), 2);
//    //每月利息
//    var interestCurrent = Math
//        .round((investMoney * (rate / 12) - everyMonthRepayMoney) * Math.pow((1 + (rate / 12)), i) + everyMonthRepayMoney);
//
//    var corpusCurrent = everyMonthRepayMoney-interestCurrent;
//    sumCorpusCurrent+=corpusCurrent;
//    if (i+1 == tempDeadline) {
//        corpusCurrent= corpusCurrent+(investMoney-sumCorpusCurrent);
//    }
//    console.log("本息："+everyMonthRepayMoney/100 +"  本金:"+corpusCurrent/100+"  利息:"+interestCurrent/100);
//}


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



