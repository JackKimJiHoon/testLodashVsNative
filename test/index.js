'use strict';

var LIMIT = 10000;

var getTestCases = function () {
  var cnt = 0;
  var arr = [];

  while(cnt < LIMIT) {
    arr.push({
      content: 'test',
      id: cnt
    });
    cnt++;
  }

  return arr;
};

module.exports = {
  LIMIT: LIMIT,
  getTestCases: getTestCases
};