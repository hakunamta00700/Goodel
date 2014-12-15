// GSUnit documentation:
// https://sites.google.com/site/scriptsexamples/custom-methods/gsunit

function testManualSearch () {
  var Logician = Goodel.Modeler("Logicians");

  var alf = Logician.findBy({ firstName: "Alfred", lastName: "Tarski" }),
      brits = Logician.findWhere({ country: "Britain" });

  
  GSUnit.assertObjectEquals("Finds single record by attribute",
                            alf, { lastName: "Tarski", firstName: "Alfred", country: "Poland" }
                             );

  GSUnit.assertArrayEqualsIgnoringOrder("Finds multiple records by attribute",
                                        brits,
                                        [{ firstName: 'George', lastName: 'Boole', country: 'Britain' },
                                         { firstName: 'Augustus', lastName: 'De Morgan', country: 'Britain' }
                                        ]
                                       );
}

function testCreate () {
  var Logician = Goodel.Modeler("Logicians"),
      al = new Logician({ firstName: "Alan", lastName: "Turing" });

  al.save();

  GSUnit.assertEquals("Adds records by attribute",
                      al['firstName'],
                      SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logicians").getRange(6, 1).getValue()
                     );
}

function testNativeFindBy () {
  var Logician = Goodel.Modeler("Logicians"),
      alf = Logician.table.natFindBy({ firstName: "Alfred", lastName: "Tarski" });
  GSUnit.assertObjectEquals("Finds single record by attribute",
                            alf, { lastName: 'Tarski', firstName: 'Alfred', country: 'Poland' }
                             );
}

function testNativeFindWhere () {
    var Logician = new Goodel.Modeler("Logicians"),
        brits = Logician.table.natFindWhere({ country: "Britain" });

    GSUnit.assertArrayEqualsIgnoringOrder("Finds multiple records by attribute",
                                        brits,
                                        [{ firstName: 'George', lastName: 'Boole', country: 'Britain' },
                                         { firstName: 'Augustus', lastName: 'De Morgan', country: 'Britain' }
                                        ]
                                       );

}

