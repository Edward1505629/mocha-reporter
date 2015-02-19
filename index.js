var util = require('util');

module.exports = Reporter;

function Reporter(runner) {
    var passes = 0;
    var failures = 0;

    runner.on('suite', function(suite) {
        if (suite.title) {
            console.log("<DESCRIBE::>" + format(suite.title));
        }
    });

    runner.on('suite end', function(suite) {
        if (suite.title) {
            console.log("<COMPLETEDIN::>");
        }
    });

    runner.on('test', function(test) {
        console.log('<IT::>' + format(test.title));
    });

    runner.on('test end', function(test) {
        console.log("<COMPLETEDIN::>");
    });

    runner.on('pass', function(test){
        console.log('<PASSED::>Passed');
    });

    runner.on('fail', function(test, err){
        console.log(err);
        console.log('<FAILED::>' + format(err.message));
    });

    runner.on('error', function(test, err){
        console.log('<ERROR::>' + format(err.message));
    });

    runner.on('end', function(){
        process.exit(0);
    });

    function format(text) {
        return text.replace(/\n/g, '<:LF:>');
    }
}