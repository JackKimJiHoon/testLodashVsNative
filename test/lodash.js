'use strict';

var _ = require('lodash');
var test = require('./index');


describe('test lodash', function () {
  it('test lodash performance', function () {
    var testCases = test.getTestCases();
    var results = [];

    console.time('lodash');
    _.each(testCases, function (item) {
      results.push({
        content: item.content,
        id: item.id
      });
    });
    console.timeEnd('lodash');
  });
});