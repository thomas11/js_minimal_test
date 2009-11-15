var t = JS_MINIMAL_TEST("my name");

t.add_test(
    "The basics: if it returns true, it passed; false, it failed.",
    function () {
        return 1 === 2;
});

t.add_test(
    "Test for exceptions by returning true in the catch block.",
    function () {
        try {
            throw { type: "MyProjectException" };
        }
        catch (e) {
            if (e.type === "MyProjectException") {
                return true;
            }
        }

        return false;
});

t.run();
