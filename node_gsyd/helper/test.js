/**
 * Created by shiqm on 16-2-29.
 */
'use strict';

var moment = require('moment');
var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://192.168.0.131:27017/node_gsyd', function(err, db) {
    if (err) throw err;
    var collection = db.collection("test_insert");
    console.log(collection,[]);


});