'use strict';

var test = require('./index');


describe('test forloop', function () {
  it('test for performance', function () {
    var testCases = test.getTestCases();
    var results = [];

    console.time('forloop');
    for (var i = 0; i < test.LIMIT; i++) {
      results.push({
        content: testCases[i].content,
        id: testCases[i].id
      });
    }
    console.timeEnd('forloop');
  });
});