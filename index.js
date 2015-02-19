var util = require('util');

module.exports = Reporter;

function Reporter(runner) {
    var passes = 0;
    var failures = 0;

    runner.on('suite', function(suite) {
        console.log("<DESCRIBE::>" + format(suite.title));
    });

    runner.on('suite end', function(suite) {
        console.log("<COMPLETEDIN::>");
    });

    runner.on('pass', function(test){
        console.log('<IT::>' + format(test.fullTitle()));
        console.log('<PASSED::>Passed');
    });

    runner.on('fail', function(test, err){
        console.log('<IT::>' + format(test.fullTitle()));
        console.log('<PASSED::>' + format(err.message));
    });

    runner.on('end', function(){
        console.log('<COMPLETEDIN::>');
        process.exit(0);
    });

    function format(text) {
        return text.replace(/\n/g, '<:LF:>');
    }
}