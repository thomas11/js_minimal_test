js\_minimal_test
===============

The most minimal JavaScript unit test solution I could come up
with. It's written using Spidermonkey, and may depend on it for the
print() function. It's for stand-alone JavaScript, not for browser
testing.

Consisting of all of ~25 lines of code, it's almost embarrassing to
publish this a project of its own. But then, it works for me, and
smaller is better as long as it works.

It has tests with names, grouped into functions according to your
liking, and a simple console output. It does not know the reason of
test failures and does not allow nesting tests. I suspect these things
tempt one to write tests that are too difficult, anyway. Just test one
concern per test function.


Example
=======

Run the tests in example.js with `$ js -f js_minimal_test.js
example.js`.


Background
==========

I have the idea of making several versions that get successively
bigger and introduce more features, to get a feel for the
behind-the-scenes of testing, and to find the sweet spot(s) for
something that is expressive enough, but small enough to be a
no-brainer to use in a new project.  At least the smallest one should
be.

It also serves as a learning JavaScript project for me.  I (try to)
strongly follow Douglas Crockford's JavaScript: The Good Parts.
