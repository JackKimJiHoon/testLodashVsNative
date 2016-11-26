'use strict';

var async = require('async');
var test = require('./index');


describe('test async', function () {
  it('test async performance', function (done) {
    var testCases = test.getTestCases();
    var results = [];

    console.time('async');
    async.each(testCases, function (item, cb) {
      results.push({
        content: item.content,
        id: item.id
      });
      cb();
    }, function (err) {
      done();
      console.timeEnd('async');
    });
  });
});