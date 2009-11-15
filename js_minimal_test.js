/*global print: false */

/*
 * js-minimal-test, a tiny helper for writing unit tests for
 * non-browser JavaScript. See example.js for an example.
 * */
var JS_MINIMAL_TEST = function (name) {
    var that = {
        name:  name,
        tests: []
    };

    that.add_test = function (name, test_func) {
        that.tests.push( {
                name: name,
                run:  function () { return test_func(); }
            }
        );
    };

    that.run = function () { 
        print("\nTesting " + name);
        for (var i = 0; i < that.tests.length; i++) {
            var passed = that.tests[i].run() ? "Passed" : "FAILED";
            var n_of_m = (i + 1) + "/" + that.tests.length;
            print("  " + passed + " " + n_of_m + ": " + that.tests[i].name);
        }
    };
    
    return that;
};
