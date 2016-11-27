'use strict';

var async = require('async');
var test = require('./index');


describe('test async performance', function () {
  it('simple for each', function (done) {
    var testCases = test.getTestCases();

    console.time('asyncSimple');
    async.each(testCases, function (item, cb) {
      var content = item.content;
      var id = item.id;
      cb();
    }, function (err) {
      done();
      console.timeEnd('asyncSimple');
    });
  });

  it('return new data', function (done) {
    var testCases = test.getTestCases();
    var results = [];

    console.time('asyncReturn');
    async.each(testCases, function (item, cb) {
      results.push({
        content: item.content,
        id: item.id
      });
      cb();
    }, function (err) {
      done();
      console.timeEnd('asyncReturn');
    });
  });
});