var runner = test_runner("OBO parsing");
var parser = OBOWEB.OboParser;


// NEXT: better validity test, read spec (e.g., "id: " as first stanza?)


runner.add_test("Identify OBO terms",
  function() {
    var obo_correct_full = '\
[Term]\n\
id: KW-0082\n\
name: Bait region\n\
def: "Protein having a peptide stretch which contains specific cleavage sites for different proteinases, and which enables inhibition of all four classes of proteinases." [UniProt]\n\
xref: GO:0017114 "wide-spectrum protease inhibitor activity"\n\
is_a: KW-9994\n';
    if (!parser.is_obo_term(obo_correct_full)) return false;

    var header_only = '[Term]\n';
    if (parser.is_obo_term(header_only)) return false;

    var header_missing = '\nid: KW-0082\n';
    if (parser.is_obo_term(header_missing)) return false;

    var malformed = '\
[Term]\n\
id; KW-0082\n';
    if (parser.is_obo_term(malformed)) return false;

    return true;
  }
);


runner.add_test("Trying to parse something that's not an OBO term throws an exception",
  function() {
    var passed = false;

    try {
      parser.parse_term("fail");
    } catch (e) {
      if (e.name === OBOWEB.exception_type) {
	passed = true;
      }
    }

    return passed;
  }
);


runner.add_test("Most basic OBO parsing: one simple key-value pair",
  function() {
    var result = parser.parse_term('[Term]\nid: KW-0082\n');

    try {
      return result.content.id === 'KW-0082';
    } catch (e) {
      return false;
    }
  }
);


runner.run();