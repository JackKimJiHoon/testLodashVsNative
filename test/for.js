'use strict';

var test = require('./index');


describe('test forLoop performance', function () {
  it('simple for test', function () {
    var testCases = test.getTestCases();

    console.time('forLoopSimple');
    for (var i = 0; i < test.LIMIT; i++) {
      var content = testCases[i].content;
      var id = testCases[i].id
    }
    console.timeEnd('forLoopSimple');
  });

  it('return new data', function () {
    var testCases = test.getTestCases();
    var results = [];

    console.time('forLoopReturn');
    for (var i = 0; i < test.LIMIT; i++) {
      results.push({
        content: testCases[i].content,
        id: testCases[i].id
      });
    }
    console.timeEnd('forLoopReturn');
  });
});