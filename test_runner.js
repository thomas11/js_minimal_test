var test_runner = function(name)
{
  var that = {name: name};
  var tests = [];

  that.add_test = function(name, test_func)
  {
    tests.push(
      {
	name: name,
	run: function() { return test_func(); }
      }
    );
  };

  that.run = function()
  {
    print("\nTesting " + name);
    for (var i = 0; i < tests.length; i++)
    {
      var passed = tests[i].run() ? "Passed" : "FAILED";
      var n_of_m = (i + 1) + "/" + tests.length;
      print("  " + passed + " " + n_of_m + ": " + tests[i].name);
    }
  };

  that.tests = tests;
  return that;
};
