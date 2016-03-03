/**
 * Created by shiqm on 16-2-29.
 */
'use strict';

var moment = require('moment');
var MongoClient = require('mongodb').MongoClient;
var esut = require('easy_util');
var digestUtil = esut.digestUtil;

console.log(digestUtil.createUUID());