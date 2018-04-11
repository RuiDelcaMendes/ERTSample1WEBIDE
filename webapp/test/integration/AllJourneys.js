/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Projects in the list
// * All 3 Projects have at least one ProjectLineDetails

sap.ui.require([
	"sap/ui/test/Opa5",
	"ertsample1/ERTSample1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ertsample1/ERTSample1/test/integration/pages/App",
	"ertsample1/ERTSample1/test/integration/pages/Browser",
	"ertsample1/ERTSample1/test/integration/pages/Master",
	"ertsample1/ERTSample1/test/integration/pages/Detail",
	"ertsample1/ERTSample1/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ertsample1.ERTSample1.view."
	});

	sap.ui.require([
		"ertsample1/ERTSample1/test/integration/MasterJourney",
		"ertsample1/ERTSample1/test/integration/NavigationJourney",
		"ertsample1/ERTSample1/test/integration/NotFoundJourney",
		"ertsample1/ERTSample1/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});