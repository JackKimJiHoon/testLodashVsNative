'use strict';

var _ = require('lodash');
var test = require('./index');


describe('test lodash performance', function () {
  it('simple each test', function () {
    var testCases = test.getTestCases();

    console.time('lodashSimple');
    _.each(testCases, function (item) {
      var content = item.content;
      var id = item.id;
    });
    console.timeEnd('lodashSimple');
  });

  it('return new data', function () {
    var testCases = test.getTestCases();
    var results = [];

    console.time('lodashReturn');
    _.each(testCases, function (item) {
      results.push({
        content: item.content,
        id: item.id
      });
    });
    console.timeEnd('lodashReturn');
  });
});