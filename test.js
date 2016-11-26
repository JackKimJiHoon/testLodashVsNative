var _ = require('lodash');

var LIMIT = 1000000;
var arr = [];
var forResult = [];
var lodashResult = [];


describe('test lodash vs for loop', function () {
    it('set test case values', function () {
       var cnt = 0;

       while(cnt < LIMIT) {
           arr.push({
               content: 'test',
               id: cnt,
           });
           cnt++;
       }
    });

    it('test for loop', function () {
        console.time('forloop');
        for(var i=0; i<LIMIT; i++) {
            forResult.push({
                content: arr[i].content,
                id: arr[i].id
            });
        }
        console.timeEnd('forloop');
    });      

    it('test for lodash', function () {
        console.time('lodash');
        _.each(arr, function (item) {
            lodashResult.push({
                content: item.content,
                id: item.id
            });
        });
        console.timeEnd('lodash');
    });
});
